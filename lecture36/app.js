var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.set("view engine", "ejs");

//ミドルウェアを使う
app.use(cookieParser());

app.get("/", (req, res) => {
  //数字に変換
  var count = parseInt(req.cookies.count || 0);
  res.cookie("count", count + 1);
  res.render("./index.ejs", { count });
});

app.listen(3000);