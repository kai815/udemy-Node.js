var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");

//エンコードする
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("./index.ejs");
});
//ポストでリクエスト来た時
app.post("/", (req, res) => {
  //bodyにPOSTデータある
  console.log(req);
  res.send("OK");
});

app.listen(3000);