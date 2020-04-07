const express = require("express");
let server = express();
// server.use()

let router = express.Router();
router.get("/login", (req, res) => {
    res.end("这是登录页面");
}).get("/register", (req, res) => {
    res.end("这是注册页面");
});
server.use(router);
server.listen(8888);