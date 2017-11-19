var fs = require('fs')

var readStream  = fs.createReadStream('../buffer/logo.PNG')
var writeStream = fs.createWriteStream('stream_logo.png')

readStream
    .on('data', function (chunk) {   //  数据正在传递时触发 多次不断触发
        if (writeStream.write(chunk) === false) {   //  说明数据还在缓存区
            readStream.pause()      //  避免缓存区爆仓
        }
    })
    .on('end', function () {    //  数据传送完成后触发，同时触发目标（可写流）的end事件，即目标不在可写
        writeStream.end()
    })
    .on('error', function (e) {
        console.log(e)
    })

writeStream.on('drain', function () {   //  数据写入完毕 继续读取
    readStream.resume()
})