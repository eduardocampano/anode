'use strict';

import express from 'express';

export default function getRoutes() {
  let router = express.Router();
  
  router.get('/greet/:name', api.http());
    
  return router;  
};