const fs = require("fs");

//先读后写  有异常catch
let data = fs.readFileSync("./a.txt", "utf8");

fs.writeFileSync("./a.txt", data, {flag: "a"});

console.log("复制成功");
