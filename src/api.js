import { DEV_MODE } from "./env";

let counter = 0;
let fakeData = [0, 1.01, 0.04, 0.13, 0.23, 0.02, 0.01]; //4r3b3b2r1r
function getFakeData() {
  counter = (counter + 1) % fakeData.length;
  return { quote: fakeData[counter] };
}

class API_c {
  constructor() {
    this.pausedTicks = 0;
    this.symbol = "R_100";
    this.callback = undefined;
    this.onOpenCB = undefined;
    this.timeout = undefined;
    this.errorCB = undefined;
    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269");

    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data);
      if (data.error) {
        return this.onErrorCB(data.error.message);
      }
      switch (data.msg_type) {
        case "proposal":
          this.handleProposalResponse(data);
          break;
        case "tick":
          this.tickCB(data);
          break;
      }
    };
    this.ws.onopen = () => {
      setTimeout(this.onOpenCB, 1000);
    };
    this.lastValue = undefined;
    this.isPlaying = true;
    this.isAuthorized = false;
    this.ws.onerror = console.error;
  }
  onError = (cb) => (this.onErrorCB = cb);
  reset = (newSymbol) => {
    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269");
    if (newSymbol) {
      this.symbol = newSymbol;
    }
    this.onOpenCB = this.startTicks;
  };
  resetTimer = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.reset, 20000);
  };
  send = (req) => this.ws.send(JSON.stringify(req));
  handleProposalResponse = (data) => {
    const id = data.proposal.id;
    this.finishBuy(id, data.proposal.ask_price);
  };
  onOpen = (cb) => (this.onOpenCB = cb);
  setOnData = (f) => {
    this.tickCB = (data) => {
      this.resetTimer();
      if (data.proposal) this.handleProposalResponse(data);
      if (!data.tick) return;
      const t = DEV_MODE ? getFakeData() : data.tick;
      if (this.lastValue == undefined) {
        this.lastValue = t.quote;
        return;
      }

      if (this.isPlaying) {
        f({ ...t, delta: t.quote - this.lastValue });
        this.lastValue = t.quote;
      } else {
        this.pausedTicks--;
        if (this.pausedTicks === 0) {
          this.callback && this.callback(t.quote, this.lastValue);
        }
      }
    };
  };
  startTicks = () => {
    this.send({ ticks: this.symbol });
  };

  unpause = () => {
    this.isPlaying = true;
  };

  setShouldFreeze = (b, cb) => {
    if (b && this.isPlaying) {
      this.isPlaying = false;
      this.pausedTicks = 5;
      this.callback = cb;
    }
  };

  onAuthorize = (cb) => {
    this.onAuthorizeCB = cb;
  };

  setUserToken = (token) => {
    console.log(token);
    const res = this.send({ authorize: token });
    console.log(res);
    this.onAuthorizeCB(res);
    // this.isAuthorized = true;
  };

  buy = (amount, isUp) => {
    console.log("proposal", amount, isUp ? "up" : "down");
    this.send({
      proposal: 1,
      amount: amount,
      basis: "stake",
      contract_type: isUp ? "CALL" : "PUT",
      currency: "USD",
      duration: 5,
      duration_unit: "t",
      symbol: this.symbol,
    });
  };

  finishBuy = (id, price) => {
    this.send({
      buy: id,
      price,
    });
  };

  cancelSubscription = () => {
    this.send({ forget_all: "ticks" });
  };
}

export const API = new API_c();
