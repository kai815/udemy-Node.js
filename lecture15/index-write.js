var fs = require("fs");

var data = "Write Node.js";

fs.writeFile("./data/write.txt", data, (error)=>{
  if(error){
    console.log(error.message);
    return;
  }
  console.log("書き込み完了");
})