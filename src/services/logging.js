'use strict';

export default class LoggingService {

  constructor(request) {
    this.request = request;
  }

  async error(error) {
    console.error(error);
  }

  async info(message) {
    console.info(message);
  }

}
