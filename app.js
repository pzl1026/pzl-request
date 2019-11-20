const Koa = require('koa')
const convert = require('koa-convert')
const loggerGenerator  = require('./middleware/logger')
// const loggerAsync  = require('./middleware/logger_async')
const Router = require('koa-router')
const app = new Koa()

// 使用中间件
app.use(convert(loggerGenerator()))
// app.use(loggerAsync());

let router = require('./route/index');

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000');