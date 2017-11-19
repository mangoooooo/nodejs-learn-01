/**
 * 什么是回调函数
 */  
function learn (something) {
    console.log(something)
}

function we (something, callback) {
    something += ' lalala'
    callback(something)
}

we('jlt', learn)