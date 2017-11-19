/**
 * 建立一个简单的web服务器
 */


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//  创建web服务器，当监听到请求之后调用回调函数给请求以响应
const server = http.createServer((req, res) => {
  //  req: 请求信息 res: 给请求响应的内容

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello'); //  修改返回的内容，刷新页面发现没有改变，需要重启服务器
});

server.listen(port, hostname, () => {   // 让服务器在3000端口监听请求
  console.log(`Server running at http://${hostname}:${port}/`);
});