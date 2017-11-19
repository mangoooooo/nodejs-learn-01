const http = require('http');
const fs   = require('fs');
const request = require('request');     //  npm install

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //  法1：
    // fs.readFile('../buffer/logo.PNG', function (err, data) {
    //     if (err) {
    //         res.statusCode = 404;
    //         res.setHeader('Content-Type', 'text/plain');
    //         res.end('file not exist');
    //     } else {
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'text/plain');
    //         res.end(data);
    //     }
    // })

    //  法2：
    // fs.createReadStream('../buffer/logo.PNG').pipe(res)

    //  法3：
    request('https://avatars3.githubusercontent.com/u/16449593?s=60&v=4').pipe(res)
});

server.listen(port, hostname, () => {   // 让服务器在3000端口监听请求
  console.log(`Server running at http://${hostname}:${port}/`);
});