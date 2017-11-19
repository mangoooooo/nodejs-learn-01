/**
 * 读写图片-复制logo
 * 但是对于大文件，十分耗内存，所以得结合stream边读边写
 */
var fs = require('fs')

fs.readFile('logo.PNG', function(err, origin_buffer) {
    console.log(Buffer.isBuffer(origin_buffer))

    fs.writeFile('logo_buffer.png', origin_buffer, function (err) {
        console.log(err)
    })


    var base64Image = origin_buffer.toString('base64')
    var decodeImage = Buffer.from(base64Image, 'base64')
    fs.writeFile('logo_decoded.png', decodeImage, function (err) {
        console.log(err)
    })
})