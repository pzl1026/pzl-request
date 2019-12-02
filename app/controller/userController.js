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

    async findOne(params) {
        return new Promise((resolve, reject) => {
            models.userModel.findOne({
                where: {
                    realname: params.realname,
                    password: commonHelper.cryptPwd(params.password)
                },
                attributes: ['id', 'realname', 'phone']
            }).then(result => {
                resolve(result);
            });
        });
    }

    async login (params) {
        try{
            let isValidate = await this.validateLogin(params);
            if (isValidate) {
                try{
                    let result = await this.findOne(params);
                    if (!result) {
                        return commonHelper.msg2Json(404, '用户名或密码错误', result);
                    } else {
                        return commonHelper.msg2Json(200, 'success', result);
                    }
                }catch (err) {
                    console.error(err);
                }
            } else {
                return commonHelper.msg2Json(500, '用户名或者密码不能为空', null);
            }
        }catch(err) {
            console.error(err);
        }
      
        
    }
}

module.exports = UserController;