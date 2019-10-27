import { Router } from 'express';

const routes = new Router();

routes.post('/users', async (req, res) => {
  return res.json({ ok: true });
});

export default routes;
