//接收一段字符串路径
const path = require("path");
let myPath = path.join(__dirname, "jack", "rose", "mick.txt");

//解析这个路径
let pathobj = path.parse(myPath);
console.log(pathobj);

//base可以作为修改文件名和后缀的方式

pathobj.base = "mick.good";

//接收路径对象转换成字符串对象
let newPath = path.format(pathobj);
console.log(newPath);