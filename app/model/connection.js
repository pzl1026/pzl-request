const Sequelize = require('sequelize');
const defineUser = require('./user');
const COMMOM = require(CONF._HELPER_COMMON_DIR_);

let sequelize = new Sequelize('mysql', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});

global.models = {
  userModel: defineUser(sequelize)
};


function createUser () {
  models.userModel.sync({force: true}).then(function () {
      // 已创建数据表
      return models.userModel.create({
          realname: 'pzl',
          phone: '17302552919',
          password: COMMOM.cryptPwd('123456')
      });
  });
}
createUser();

