var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //ユーザーエージェントの取得
  console.log(req.get("user-agent"));
  // キャッシュさせない設定
  res.set("Cache-Control", "no-cache");
  res.set("Pragma", "no-cache");
  res.render("./index.ejs");
});

app.listen(3000);