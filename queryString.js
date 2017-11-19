var queryString = require('querystring');
var str1 = 'name=jlt&age=18'
var str2 = 'name=jlt&age=18&habbit=cooking&habbit=eat'
var str3 = 'name:jlt,age:18,habbit:cooking,habbit:eat'

console.log(queryString.escape(str1))   //  转义
console.log(queryString.unescape(queryString.escape(str1))) //  反转义 

console.log(queryString.parse(str2))
console.log(queryString.parse(str3, ',', ':'))
console.log(queryString.parse(str2, null, null, {
    maxKeys: 0,     //  默认100组，0：去除限制
    decodeURIComponent: queryString.unescape(),     //  默认值
}))

console.log(queryString.stringify({ name: 'jlt', age: '18', habbit: [ 'cooking', 'eat' ] }))

