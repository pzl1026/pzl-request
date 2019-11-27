var Sequelize = require('sequelize');

global.sequelize = new Sequelize('mysql', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});


