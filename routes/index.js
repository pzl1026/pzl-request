const router = require('koa-router')();
const userController = require(CONF._CONTROLLER_DIR_ + '/userController');
const common = require(CONF._HELPER_COMMON_DIR_);
console.log(userController);
const uc = new userController();
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/login', async (ctx, next) => {
    let postData = ctx.request.body
    let data = await uc.login(postData);
    ctx.body = data;
});

module.exports = router
