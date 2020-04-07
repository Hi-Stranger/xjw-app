const express = require("express");
const fs = require("fs");
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
});
let router = express.Router();
router.get("/", (req, res, next) => {
    //假如获取文件
    // let errorPath = './abc/e.txt';
    // try {
    //     fs.readFileSync(errorPath);
    // } catch (err) {
    //     // throw err;  //给用户看到了异常太恶心，体验不好
    //     next(err);  //触发一个具备4个参数的中间件函数
    // }
    res.render("file.html");
})
    //最后一条路由中
    .all("*", (req, res) => {
        res.send("地址错误");
    });
//要把js下的文件暴露出来  可以直接拿到资源
server.use(express.static('./views'));
//当虚拟目录public被匹配以后  未来的url都会去除掉/public
// server.use('/public', express.static('./public'));
server.use(router);
//处理错误(参数位置错误优先)
server.use((err, req, res, next) => {
    res.send('<h1>页面错误，去首页看看</h1>');
});


server.listen(8888);