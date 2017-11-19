/**
 * stream是EventEmitter的实例; 
 * 那么流就具有异步的特征，可以监听和触发事件；
 * 流在各个部分的变化都能被监听到
 */

var fs = require('fs')

 var readStream = fs.createReadStream('../buffer/logo.PNG')
 var n = 0
 readStream
    .on('data', function (chunk) {   //  数据正在传递时触发 多次不断触发
        n++

        console.log('emit data -------')
        console.log(Buffer.isBuffer(chunk))
        // console.log(chunk.toString('utf8'))

        readStream.pause()      //  暂停
        setTimeout(function () {
            readStream.resume() //  继续
        }, 1000)

    })
    .on('readable', function () {
        console.log('data is readable')
    })
    .on('end', function () {    //  数据传送完成后触发，同时触发目标（可写流）的end事件，即目标不在可写
        console.log('data end -------------n: ' + n)
    })
    .on('close', function () {  //  整个流传输结束 关闭时触发
        console.log('data close ---------')
    })
    .on('error', function (e) {
        console.log(e)
    })