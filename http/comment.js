/**
 * 发起一个请求 来添加一条评论
 */
var http = require('http')
var queryString = require('querystring')

var postData = queryString.stringify({
    'cid': 1,
    'content': '内容'
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': '',
        'Cach-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': '',
        'Cookie': '',
        'Host': '',
        'User-Agent': '',
        //  .......
    }
}

//  发起一个请求
var req = http.request(options, function (res) {
    console.log('status: ' + res.statusCode)
    console.log('headers: ' + JSON.stringify(res.headers))

    res.on('data', function (chunk) {
        console.log(typeof chunk)
    })

    res.on('end', function () {
        console.log('请求结束')
    })

})

req.on('error', function (e) {
    console.log('error: ' + e.message)
})

req.write(postData)     //  把数据写入请求体

req.end()   //  手动调用，表明完成请求