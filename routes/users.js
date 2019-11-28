const router = require('koa-router')();
const userController = require(CONF._CONTROLLER_DIR_ + '/userController');
const uc = new userController();

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


module.exports = router
