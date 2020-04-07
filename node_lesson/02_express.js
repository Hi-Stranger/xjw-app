const express = require("express");
let server = express();
server.listen(8888);
server.use("/d", (req, res, next) => {
    console.log(1);
    next();
});
server.use("/s", (req, res, next) => {
    console.log(2);
    next();
});
server.use("/d", (req, res, next) => {
    console.log(3);
    next();
});
server.use("/s", (req, res, next) => {
    console.log(4);
    next();
});