var express = require("express");
var app = express();

app.get("/", (req, res)=>{
  res.status(200).send("Hello Express");
})
app.listen(3000);