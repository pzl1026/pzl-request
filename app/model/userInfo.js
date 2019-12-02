const Sequelize = require('sequelize');
 
const userInfoFields = {
    pid: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        field: 'pid' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    birthday: {
        type: Sequelize.INTEGER,
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
    },
    degree: {
        type: Sequelize.STRING,
    },
    learn_experience: {
        type: Sequelize.STRING,
    },
    job_experience: {
        type: Sequelize.STRING,
    },
    skill: {
        type: Sequelize.STRING,
    },
    projects:{
        type: Sequelize.STRING,
    },
    intro:{
        type: Sequelize.STRING,
    }
};

function defineUserInfo (seq, userModel) {
    let model = seq.define(
        'user_info', 
        userInfoFields, 
        {
            freezeTableName: true // Model 对应的表名将与model名相同
        });

    model.belongsTo(userModel, {as: 'user', foreignKey: 'pid', targetKey: 'id'});

    model.sync({force: true}).then(() => {
        model.create({
            pid: 1,
            birthday: 9999,
            sex: 'nan',
            age: 18,
            degree: 'benke',
            learn_experience: 'llll',
            job_experience: 'jjjj',
            skill: 'sssss',
            projects: 'pppp',
            intro: 'iiii'
        });
    });
    return model;
}

module.exports = defineUserInfo;
