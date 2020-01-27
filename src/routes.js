import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// middleware global, será aplicado para todas as requisições abaixo desta linha
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
