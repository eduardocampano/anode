'use strict';

export default class SampleService {

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  async run() {
    await this.sleep(1000);
  }
  
}
