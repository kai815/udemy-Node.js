var systemlogger = require("./lib/logger/systemlogger.js");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.disable("x-powered-by");

app.use("/public", express.static(__dirname +"/public/"+ (process.env.NODE_ENV === "development" ? "development" : "production")));

app.use("/", require("./routes/index.js"));

app.use(systemlogger());

//---
var logger = require("./lib/logger/logger").application;
// 下記の2行を何度も書くのは面倒なのでlogger.jsで使いまわしやすく
// logger.addContext("key", "test");
// logger.error("message");
logger.error("test","message2");
//---

app.listen(3000);
