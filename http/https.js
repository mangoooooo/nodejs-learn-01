var https = require('https')
var fs = require('fs')

var options = {
    key: fs.readFileSync('ssh_key.pem'),    //  读取证书私钥文件
    cert: fs.readFileSync('ssh_cert.pem'),  //  读取证书文件
}

//  运行一个https服务器
https.createServer(options, function (req, res) {
    res.writeHead(200)
    res.end('hello world')
}).listen(8090)