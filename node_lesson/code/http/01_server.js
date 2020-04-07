//1.引入核心对象
const http = require("http");

//2.用这个东西创建服务器
let server = http.createServer();

server.on("request", (req, res) => {
    res.end("xxx");
});

//ip找计算机  端口找程序
server.listen(8888, () => {
    console.log("启动成功");
});