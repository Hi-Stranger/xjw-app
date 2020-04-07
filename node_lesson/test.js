const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    if (req.url === "/") {

    }
}).listen(8888, () => {
    console.log("启动成功");
});