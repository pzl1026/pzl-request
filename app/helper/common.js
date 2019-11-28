var crypto = require('crypto');

function cryptPwd(password) {
    var md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data;
            });
            ctx.req.addListener('end', function(){
                let parseData = parseQueryStr( postdata );
                resolve( parseData );
            });
        } catch ( err ) {
            reject(err);
        }
    });
}
  
// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
    let queryData = {};
    let queryStrList = queryStr.split('&');
    for (let [ index, queryStr ] of queryStrList.entries()) {
        let itemList = queryStr.split('=');
        queryData[ itemList[0] ] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

function msg2Json (code, msg, data) {
    return {
        code, 
        msg, 
        data
    }
}

module.exports = {
    cryptPwd,
    parsePostData,
    parseQueryStr,
    msg2Json
}