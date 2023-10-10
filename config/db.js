const { Sequelize } = require('sequelize');

// Создайте подключение к базе данных
const sequelize = new Sequelize('amazonbooks', 'amazonbooks', 'amazonbooks', {
  host: 'localhost',
  dialect: 'mysql',
  timestamps: false,
});

module.exports = sequelize;

