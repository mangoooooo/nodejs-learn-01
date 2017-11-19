var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(4)    //  设置最大监听数量

//  addEventListener  
//  【一个事件】默认最多注册10个监听
life.on('work', function(something) {
    console.log('1:' + something)
})
life.on('work', function(something) {
    console.log('2:' + something)
})
life.on('work', function(something) {
    console.log('3:' + something)
})
life.on('work', function(something) {
    console.log('4:' + something)
})
life.on('work2', function(something) {
    console.log('5:' + something)
})
life.on('work2', function(something) {
    console.log('6:' + something)
})

life.emit('work', 'coding')
life.emit('work2', 'coding') 

//  要移除某个监听 需确保添加监听时回调函数不是匿名函数，这点跟js时一样的
// life.removeListener('work', fn)     //  fn 函数的引用
// life.removeAllListeners('work')

//  查询数量
console.log(life.listeners('work').length)
console.log(EventEmitter.listenerCount(life, 'work'))