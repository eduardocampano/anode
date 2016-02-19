'use strict';

import express from 'express';
import EchoService from './services/echo';

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

    this.app.get('/greet/:name', wrap(async (req, res) => {
      if (req.params.name === 'error') {
        throw new BadRequestError('sample error');
      }
      var echoService = new EchoService();
      var response = await echoService.greet(req.params.name);
      res.send(response);
    }));

    this.app.get('/', wrap(async (req, res) => {
      res.send('Hi, I\'m just a server');
    }));
  }

  setupServer() {
    var server = this.app.listen(3006, () => {
      var host = server.address().address;
      var port = server.address().port;
      console.log('server listening at http://%s:%s', host, port);
    });
    this.server = server;
  }

}
