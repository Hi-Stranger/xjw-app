const express = require("express");
let server = express();
// server.use()
//注册一个模板引擎
//渲染文件的后缀名（引擎名称）
server.engine(".html", require("express-art-template"));
//配置默认渲染引擎
server.set("view engine", ".html");
//区分环境
server.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    imports: {
        num: 1,
        reverse: function (str) {
            return "^_^" + str;
        }
    }
});
let router = express.Router();
router.get("/list", (req, res) => {
    res.render("list.html", {
        heros: [{name: "貂蝉"}, {name: "吕布"}, {name: "韩信"}],
    })
});
server.use(router);
server.listen(8888);