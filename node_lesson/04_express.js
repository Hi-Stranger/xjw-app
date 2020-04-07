const express = require("express");
let server = express();
// server.use()

let router = express.Router();
router.get("/json", (req, res) => {
    res.json([{name: "空耳"}]);
}).get("/redirect", (req, res) => {
    res.redirect("http://www.baidu.com");
}).get("/download", (req, res) => {
    res.download("./app.js");
}).get("/jsonp", (req, res) => {
    res.jsonp("jack love rose");
});
server.use(router);
server.listen(8888);