const { Router } = require('express');

const routes = new Router();

routes.post('/users', (req, res) => {
  return res.json();
})