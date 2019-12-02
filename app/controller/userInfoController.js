var validator = require('validator');
const commonHelper = require(CONF._HELPER_COMMON_DIR_);
const userModel = require(CONF._MODEL_DIR_ + '/user');

class UserController {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    async validateLogin(params) {
        for (let key in params) {
            if (validator.isEmpty(params[key])) {
                return false;
            };
        }
        return true;
    }

    // async findOne(params) {
    //     return new Promise((resolve, reject) => {
    //         models.userModel.findOne({
    //             where: {
    //                 realname: params.realname,
    //                 password: commonHelper.cryptPwd(params.password)
    //             },
    //             attributes: ['id', 'realname', 'phone']
    //         }).then(result => {
    //             resolve(result);
    //         });
    //     });
    // }

    async findOne(pid) {
        return new Promise((resolve, reject) => {
            models.userInfoModel.findOne({
                where: {pid}, // 这里传入的是一个查询对象，因为我的查询条件是动态的，所以前面构建好后才传入，而不是写死
                // offset: start, // 前端分页组件传来的起始偏移量
                // limit: Number(pageSize), // 前端分页组件传来的一页显示多少条
                attributes: ['birthday', 'sex', 'age', 'degree', 'learn_experience', 'job_experience', 'skill', 'projects', 'intro'],
                include: [{ // include关键字表示关联查询
                    model: models.userModel, // 指定关联的model
                    as: 'user', // 由于前面建立映射关系时为class表起了别名，那么这里也要与前面保持一致，否则会报错
                    attributes: ['id', 'realname', 'phone'], // 这里的attributes属性表示查询class表的name和rank字段，其中对name字段起了别名className
                }],
                raw: false // 这个属性表示开启原生查询，原生查询支持的功能更多，自定义更强
            }).then(result => {
                resolve(result);
            }).catch(err => {
                console.error("xxx-findAndCountAll occur error:", err);
            });
        });
    }

    async getInfo (pid) {
        let result = await this.findOne(pid);
        if (!result) {
            return commonHelper.msg2404('不存在该数据');
        } else {
            return commonHelper.msg2Json(200, 'success', result);
        }
    }
}

module.exports = UserController;