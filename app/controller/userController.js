var validator = require('validator');
const commonHelper = require(CONF._HELPER_COMMON_DIR_);

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
            console.log('logigigigi')
        } else {
            return commonHelper.msg2Json(500, '用户名或者密码不能为空', null);
        }
        
    }
}

module.exports = UserController;