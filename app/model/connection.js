const Sequelize = require('sequelize');
const defineUser = require('./user');
const defineUserInfo = require('./userInfo');

let sequelize = new Sequelize('mysql', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});
userModel = defineUser(sequelize);
global.models = {
  userModel,
  userInfoModel:  defineUserInfo(sequelize, userModel)
};


