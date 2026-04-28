const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clientes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log
});

sequelize.authenticate()
  .then(() => console.log('✅ Conectado a MySQL'))
  .catch(error => console.log('❌ Error al conectar con MySQL:', error));

module.exports = sequelize;