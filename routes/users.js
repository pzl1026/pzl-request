const router = require('koa-router')();
const userController = require(CONF._CONTROLLER_DIR_ + '/userController');
const userInfoController = require(CONF._CONTROLLER_DIR_ + '/userInfoController');
const uc = new userController();
const uic = new userInfoController();

router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  let postData = ctx.request.body
  let data = await uc.login(postData);
  ctx.body = data;
});

router.post('/info', async (ctx, next) => {
  let postData = ctx.request.body
  let data = await uic.getInfo(1);
  ctx.body = data;
});



module.exports = router
