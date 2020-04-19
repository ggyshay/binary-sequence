class API_c {
  handleMessage = (msg) => {};
  init = (url) =>
    new Promise((resolve, reject) => {
      this.callbacks = {};

      this.ws = new WebSocket(url);
      this.ws.onopen(() => {
        resolve();
      });
      this.ws.onmessage = (ev) => {
        const data = JSON.parse(ev.data);
        if (data.error) {
          return this.callbacks[data.msg_type].reject(data.error);
        }
        return this.callbacks[data.msg_type].resolve(data);
      };
    });
  close = () =>
    new Promise((resolve, reject) => {
      if (this.ws.readyState === this.ws.CLOSED) {
        resolve();
      } else {
        this.ws.onclose = resolve;
        if (this.ws.readyState !== this.ws.CLOSING) {
          this.ws.close();
        }
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
