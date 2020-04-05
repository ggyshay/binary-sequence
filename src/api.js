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
    this.callback = undefined;
    this.ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269");
    this.ws.onopen = (evt) => {
      this.ws.send(JSON.stringify({ ticks: "R_100" }));
    };
    this.lastValue = 0;
    this.isPlaying = true;

    // this.ws.onmessage = msg => {
    //   var data = JSON.parse(msg.data);
    //   console.log("ticks update: %o", data);
    // };

    this.ws.onerror = console.log;
  }
  setOnData = (f) => {
    this.ws.onmessage = (msg) => {
      const t = DEV_MODE ? getFakeData() : JSON.parse(msg.data).tick;
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
}

export const API = new API_c();
