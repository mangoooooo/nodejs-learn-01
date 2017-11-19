/**
 * 简单的nodejs模块
 * school -> class -> teacher、student
 */

var class01 = require('./class');
class01.add('jlt', ['j01', 'j02', 'j03']);

exports.add = function (classes) {
    classes.forEach(function (item, index) {
        var teacher = item.teacherName;
        var students = item.students;

        class01.add(teacher, students)
    })
    
}