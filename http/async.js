/**
 * 同步与异步
 */

//  同步：程序的执行顺序与任务的排列顺序是一致（同步）的
//  异步：每一个任务都会有一个或者多个回调函数；
//        前一个任务执行结束之后不是执行后一个任务而是执行回调函数；
//        后一个任务也不是等待前一个任务结束就执行；
//        程序的执行顺序与任务的排列顺序是不一致；

//  js中最基础的异步函数：setTimeOut setInterval

var c = 0;
function print() {
    console.log(c);
}

function plus(callback) {
    setTimeout(function () {
        c++
        callback()
    }, 1000)
}


plus(print);