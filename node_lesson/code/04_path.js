const path = require("path");   //核心对象
//3段来自不同用户输入的路径   //one//   two   ///three///
const mypath = path.join(__dirname, "//one//", "two", "///three///");
console.log(mypath);

//根据相对路径来返回绝对路径

const str = "././view/abc/efg.js";
let temp = path.resolve(str);
console.log(temp);