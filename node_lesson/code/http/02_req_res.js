//1.引入核心对象
const http = require("http");

//2.用这个东西创建服务器
let server = http.createServer();

// server.on("request", (req, res) => {
//     //req 是只读的，拿属性
//     //res 是只写的，调函数
//     console.log(req.headers);   //头
//     console.log(req.url);   //行
//     console.log(req.method);    //行
//     req.on("data", (data) => {
//         console.log(data.toString());
//     });
//     res.end("xxx"); //写入到响应体
// });

server.on("request", (req, res) => {
    //req 是只读的，拿属性
    //res 是只写的，调函数


    //写头    1.一次性写  2.多次写
    res.setHeader("a", "a");
    res.setHeader("b", "b");
    //一次性写一定在多次写的后面
    // res.writeHead(200, {"content-type": "text/html;charset=utf-8", "d": "d"});
    //写行
    res.writeHead(200, {"content-type": "text/html;charset=utf-8"});    //第二个参数解决乱码

    //写体
    res.write("这是哈哈哈");
    res.write("def");
    res.end("xxx");
});

//ip找计算机  端口找程序
server.listen(8888, () => {
    console.log("启动成功");
});