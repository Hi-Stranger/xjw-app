const fs = require("fs");

// fs.readFile("./a.txt", "utf8", (err, data) => {
//     if (err) throw err; //抛到控制台显示错误信息
//     console.log(data);
//     //需要获取字符串数据，可以调用buffer篮子.toString(编码)函数
//     // console.log(data.toString("utf8")); //默认也是utf8
// });


fs.writeFile("./a.txt", "今天赚了1块钱", {flag: "a"}, (err) => {  //flag参数为a表示追加
    if (err) throw err; //抛到控制台显示错误信息
    console.log("完成了");
});


//追加方式1:appendFile("path",data,callback)
// fs.appendFile("./a.txt", "今天赚了1块钱", (err) => {
//     if (err) throw err; //抛到控制台显示错误信息
//     console.log("文件追加成功");
// });