//  创建方式1
console.log(Buffer.from('jlt'))  //  默认编码模式是utf-8
console.log(Buffer.from('jlt', 'base64'))

//  创建方式2
var buf = Buffer.alloc(8)     //  指定长度
console.log(buf.length)
buf.write('1234567890')    //  溢出部分不会被写入
console.log(buf)

//  创建方式3
var buf2 = Buffer.from([1,2.8,3,4])    // 如果有小数点会被向下取整
console.log(buf2)

//  访问
console.log(buf2[1])

// 关于length
var str1 = '测试';
var buf1 = Buffer.from(str1)

console.log(str1.length);   //  2
console.log(buf1.length);   //  6