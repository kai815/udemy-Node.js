var express = require("express");
var app = express();

// ejsを使う設定
app.set("view engine", "ejs");
//静的ファイルの配信
app.use("/public",express.static(__dirname + "/public"));
// ルーティング
app.use("/" , require("./routes/index.js"));

app.listen(3000);