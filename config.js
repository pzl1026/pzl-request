const path = require('path');

const dir = {
    _APP_DIR_: path.resolve(__dirname, './app'),
    _HELPER_DIR_: path.resolve(__dirname, './app/helper'),
    _CONTROLLER_DIR_: path.resolve(__dirname, './app/controller'),
    _MIDDLEWARE_DIR_: path.resolve(__dirname, './app/middleware'),
    _MODEL_DIR_: path.resolve(__dirname, './app/model'),
    _HELPER_COMMON_DIR_: path.resolve(__dirname, './app/helper/common')
};


const exp = {
    phone: /^1[3456789]\d{9}$/
}

module.exports = {
  ...dir,
  ...exp
}