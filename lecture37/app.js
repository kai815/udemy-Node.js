var express = require("express");
var session = require("express-session");
var app = express();

app.set("view engine", "ejs");

//sessionモジュールの使用
app.use(session({
  secret: "qwerty",   // <- よく使われる2016年 3位
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));

app.get("/", (req, res) => {
  //セッションだと数字として使える
  var count = req.session.count || 0;
  req.session.count = count + 1;
  res.render("./index.ejs", { count });
});

app.listen(3000);