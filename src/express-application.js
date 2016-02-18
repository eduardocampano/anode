'use strict';

var express = require('express');
var SampleService = require('./services/sample');

export default class ExpressApplication {

  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  run() {
    this.setupServer();
  }

  setupMiddleware() {
    this.app.use((err, req, res, next) => {
      if (err instanceof BadRequestError) {
        res.status(400);
        return res.send(err.message);
      }
    });
  }

  setupRoutes() {
    let wrap = fn => (...args) => fn(...args).catch(args[2]);

    this.app.get('/{id}', wrap(async (req, res) => {
      if (req.params.id === 'error') {
        throw new BadRequestError('sample error');
      }
      var sampleService = new SampleService();
      var response = await sampleService.run();
      res.send(response);
    }));

  }

  setupServer() {
    this.server = this.app.listen(3006, () => {
      var host = server.address().address;
      var port = server.address().port;
      console.log('server listening at http://%s:%s', host, port);
    });
  }

}
