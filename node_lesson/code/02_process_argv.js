//接收命令行参数
console.log(process.argv);

//命令行加法计算器
//process.argv => [node的绝对路径,文件的绝对路径,1,3]
//获取数组的2，3索引对应的元素
let [, , num1, num2] = process.argv;
console.log("计算中");
setTimeout(() => {
    console.log("结果为" + num1 + num2);
}, 2000);