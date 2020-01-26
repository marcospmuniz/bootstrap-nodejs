import express from 'express';
import routes from './routes';

// importa a conexão ao banco de dados
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // middleware global dizendo que aplicação espera receber e retornar JSON
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
