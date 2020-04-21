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
    this.resolution = 2;
    this.symbol = "R_100";
    this.callback = undefined;
    this.onOpenCB = undefined;
    this.timeout = undefined;
    this.errorCB = undefined;
    this.setupApiCallbacks();
    this.lastValue = undefined;
    this.isPlaying = true;
    this.isAuthorized = false;
    this.stack = [];
    this.ws.onerror = console.error;
  }

  setupApiCallbacks = () => {
    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269");
    this.callbacks = {};

    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      console.log(data, this.callbacks[data.msg_type], this.callbacks);
      if (data.error) {
        return this.callbacks[data.msg_type].reject(data.error);
      }
      if (!this.callbacks[data.msg_type]) {
        debugger;
      }
      return this.callbacks[data.msg_type].resolve(data);
    };
    this.ws.onopen = () => {
      console.log("open");
      setTimeout(this.onOpenCB, 1000);
    };
  };

  //   onError = (cb) => (this.onErrorCB = cb);
  reset = async () => {
    console.log("reseting");
    if (
      this.ws.readyState !== this.ws.CLOSED &&
      this.ws.readyState !== this.ws.CLOSING
    ) {
      await this.cancelSubscription();
      console.log("forgot all ticks");
      this.ws.close();
      console.log("closed");
    }
    setTimeout(() => {
      this.onOpenCB = () => this.startTicks();
      this.setupApiCallbacks();
    }, 1000);
  };

  resetTimer = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(this.reset, 200000);
  };

  send = (req) => this.ws.send(JSON.stringify(req));
  handleProposalResponse = (data) => {
    const id = data.proposal.id;
    this.finishBuy(id, data.proposal.ask_price);
  };
  onOpen = (cb) => (this.onOpenCB = cb);
  pushToStack = (d) => {
    if (this.stack.length > 10) {
      this.stack.shift();
    }
    this.stack.push(d);
  };
  setOnData = (f) => {
    this.tickCB = (data) => {
      console.log("tick");
      this.resetTimer();
      if (data.proposal) this.handleProposalResponse(data);
      if (!data.tick) return;
      const t = DEV_MODE ? getFakeData() : data.tick;
      this.pushToStack(t);
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
          this.callback && this.callback(t.quote, this.lastValue, this.stack);
        }
      }
    };
  };
  //api external methods
  startTicks = () =>
    new Promise((resolve, reject) => {
      console.log("send ticks");
      this.send({ ticks: this.symbol });
      this.callbacks["tick"] = { resolve: this.tickCB, reject };
      console.log("callbacks after that", this.callbacks);
    });

  authorize = (token) =>
    new Promise((resolve, reject) => {
      // console.log(token);
      this.send({ authorize: token });
      this.callbacks["authorize"] = { resolve, reject };
      // this.isAuthorized = true;
    });

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

  buy = async (amount, isUp) => {
    const data = await new Promise((resolve, reject) => {
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
      this.callbacks["proposal"] = { resolve, reject };
    });
    const id = data.proposal.id;
    return new Promise((resolve, reject) => {
      this.send({
        buy: id,
        price: data.proposal.ask_price,
      });
      this.callbacks["buy"] = { resolve, reject };
    });
  };

  cancelSubscription = () =>
    new Promise((resolve, reject) => {
      this.send({ forget_all: "ticks" });
      this.callbacks["forget_all"] = { resolve, reject };
    });
}

export const API = new API_c();
