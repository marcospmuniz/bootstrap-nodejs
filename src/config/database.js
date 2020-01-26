module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'gobarber',
  port: '5434',
  define: {
    timestamps: true, // define que todas as tabelas terão created_at e updated_at
    underscored: true, // define que as tabelas serão criadas com underscored
    underscoredAll: true, // define que as tabelas serão criadas com underscored
  },
};
