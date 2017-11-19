var Teacher = require('./teacher');
var Student = require('./student');

function add (teacher, students) {
    Teacher.add(teacher);
    students.forEach(item => {
        Student.add(item);
    })
}

exports.add = add;      //  想让模块成为传统的模块实例
//module.exports = add;   //  想让模块成为一个特别的对象类型