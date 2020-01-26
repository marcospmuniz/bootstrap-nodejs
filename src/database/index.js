import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

// array com todos os models da aplicação
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // executa o método init de todos os models da aplicação injetando a conexão ao db neles
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
