'use strict';

import ExpressApplication from './express-application';

export default class Application {
  constructor(config) {
    this.expressApplication = new ExpressApplication();
  }

  run() {
    this.expressApplication.run();
  }
}
