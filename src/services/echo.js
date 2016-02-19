'use strict';

export default class EchoService {

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  async greet(name) {
    await this.sleep(1000);
    return `hi, ${name}`;
  }

}
