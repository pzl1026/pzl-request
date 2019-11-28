const Sequelize = require('sequelize');
const COMMOM = require(CONF._HELPER_COMMON_DIR_);

var User = sequelize.define('user2', {
        realname: {
            type: Sequelize.STRING,
            field: 'realname' // Will result in an attribute that is firstName when user facing but first_name in the database
        },
        phone: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
    freezeTableName: true // Model 对应的表名将与model名相同
});
  
User.sync({force: true}).then(function () {
    // 已创建数据表
    return User.create({
        realname: 'pzl',
        phone: '17302552919',
        password: COMMOM.cryptPwd('123456')
    });
});