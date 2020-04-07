console.log(process.env);

//如果PROCESSOR_REVISION的值为2505 输出正确  否则报错
//1.获取环境变量中关键的值
let result = process.env.PROCESSOR_REVISION;
//2.判断是否等于2505
if (result === "2505") {
    console.log("是正确的");
} else {
    console.log("报错了");
}

// 应用上，同样运行一个项目，但是本机和真实的服务器上要有区别
