'use strict';

export default class EchoService {

  constructor(loggingService) {
    this.loggingService = loggingService;
  }

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  async greet(name) {
    await this.sleep(1000);
    if (name === 'error') {
      await this.loggingService.info('Someone named error?');
    }
    return `hi, ${name}`;
  }

}
