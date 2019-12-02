const Sequelize = require('sequelize');
const COMMOM = require(CONF._HELPER_COMMON_DIR_);

const userFields = {
    realname: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        field: 'realname' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    phone: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}


function defineUser (seq) {
    let model = seq.define(
        'user2', 
        userFields, 
        {
            freezeTableName: true // Model 对应的表名将与model名相同
        });
    model.sync({force: false}).then(() => {
        console.log('user2 table已经强制创建');
        // model.create({
        //     realname: 'pzl',
        //     phone: '17302552919',
        //     password: COMMOM.cryptPwd('123456')
        // });
    });
    return model;
}


module.exports = defineUser;