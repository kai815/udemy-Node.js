var express = require("express");
var app = express();

app.use(require("./lib/logger.js"));

app.get("/", (req, res)=>{
  res.status(200).send("Hello Express");
});
app.get("/home/index", (req, res)=>{
  res.status(200).send("OK");
})

app.get("/test/:id", (req, res)=>{
  res.status(200).send(`test/${req.params.id}/のリクエストがきました`);
})

app.use("/user", require("./router/user.js"));
app.listen(3000);