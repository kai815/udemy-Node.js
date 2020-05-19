var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (error, client)=>{
  var db = client.db("sample");
  // db.createCollection("test", (error, collection) => {
  //   client.close();
  // });
  db.listCollections().toArray((error, items) => {
    for (let item of items) {
      console.log(item.name);
    }
    client.close();
  })
})