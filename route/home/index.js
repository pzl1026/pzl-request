const Router = require('koa-router');
let home = new Router();

// 子路由1
home.get('/', async ( ctx )=>{
    let html = `
      <ul>
        <li><a href="/page/helloworld">/page/helloworld22</a></li>
        <li><a href="/page/404">/page/404222</a></li>
      </ul>
    `
    // const query = require('../../data/config');

    // async function selectAllData( ) {
    //   let sql = 'SELECT * FROM user'
    //   let dataList = await query( sql )
    //   return dataList
    // }
    
    // async function getData() {
    //   let dataList = await selectAllData()
    //   return dataList;
    // }

    // ctx.body = `<pre>${await getData().toString()}</pre>`;

    require('../../data/createTables/user');
    console.log(__dirname, 222)
    ctx.body = '创建表成功';
});

module.exports = home;
  