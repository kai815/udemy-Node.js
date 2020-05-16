var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //クエリ文字列は数字文字列になる
  console.log(req.query);
  res.render("./index.ejs");
});

app.listen(3000);