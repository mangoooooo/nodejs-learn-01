var Teacher = require('./teacher');     //  require(xxx)de 返回值：module.exports
var Student = require('./student');

function add (teacher, students) {
    Teacher.add(teacher);
    students.forEach(item => {
        Student.add(item);
    })
}

exports.add = add;      //  想让模块成为传统的模块实例
//module.exports = add;   //  想让模块成为一个特别的对象类型

//console.log(module)
//console.log(exports === module.exports);    //  true
//如果给module.exports 或 exports重新赋值， require得到的将是修改的值，这点跟js对象的对象不同
