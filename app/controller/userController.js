var validator = require('validator');
const commonHelper = require(CONF._HELPER_COMMON_DIR_);
const userModel = require(CONF._MODEL_DIR_ + '/user');

class UserController {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    async validateLogin (params) {
        for (let key in params) {
            if (validator.isEmpty(params[key])){
                return false;
            };
        }
        return true;
    }

    async login (params) {
        let isValidate = await this.validateLogin(params);
        if (isValidate) {
            async function findOne() {
                return new Promise((resolve, reject) => {
                    models.userModel.findOne({
                        where: {realname: params.realname},
                        attributes: ['id', 'realname', 'phone']
                    }).then(project => {
                          resolve(project);
                        // project will be the first entry of the Projects table with the title 'aProject' || null
                        // project.get('title') will contain the name of the project
                    });
                });
            }
            let result = await findOne();
            return commonHelper.msg2Json(200, 'success', result);
        } else {
            return commonHelper.msg2Json(500, '用户名或者密码不能为空', null);
        }
        
    }
}

module.exports = UserController;