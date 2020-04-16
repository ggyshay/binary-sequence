class API_c {
  init = (url) => {
    this.ws = new WebSocket(url);
    this.callbacks = {};
  };
  close = () =>
    new Promise((resolve, reject) => {
      if (this.ws.readyState === this.ws.CLOSED) {
        resolve();
      }
    });

  reset = () => {
    this.close();
  };
  subscribe = (key, payload, callback, onError) => {
    this.ws.send(payload);
    this.callbacks[key] = { resolve: callback, reject: onError };
  };
  send = (key, payload) =>
    new Promise((resolve, reject) => {
      this.callbacks[key] = { resolve, reject };
      this.ws.send(payload);
    });
}

export const API = new API_c();
