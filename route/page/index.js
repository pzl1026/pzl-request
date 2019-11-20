const Router = require('koa-router');

let page = new Router()
page
.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
})
.get('/helloworld', async ( ctx )=>{
  console.log(2222)
  ctx.body = 'helloworld page222!'
})


module.exports = page;
