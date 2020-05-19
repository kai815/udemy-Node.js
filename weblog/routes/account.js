var { CONNECTION_URL, DATABSE, OPTIONS } = require("../config/mongodb.config.js");
var router = require("express").Router();
var MongoClient = require("mongodb").MongoClient;

var createRegistData = function(body) {
  var datetime = new Date();
  return {
    url: body.url,
    published: datetime,
    updated: datetime,
    title: body.title,
    content: body.content,
    keywords: (body.keywords || "").split(","),
    authors: (body.authors || "").split(","),
  };
};

var validateRegistData = function(body) {
  var isValidated = true, errors = {};

  if(!body.url){
    isValidated = false;
    errors.url = "URLが未入力です。'/'から始まるURLを入力して下さい。";
  }

  if(body.url && /^\//.test(body.url) === false) {
    isValidated = false;
    errors.url = "'/'から始まるURLを入力して下さい。";
  }

  if(!body.title) {
    isValidated = false;
    errors.titel = "タイトルが未入力です。任意のタイトルを入力してください。";
  }

  return isValidated ? undefined :errors;
};

router.get("/", (req, res) => {
  res.render("./account/index.ejs");
});

router.get("/posts/regist", (req, res) => {
  res.render("./account/posts/regist-form.ejs");
});

router.post("/posts/regist/input", (req, res) => {
  var original = createRegistData(req.body);
  res.render("./account/posts/regist-form.ejs", {original});
});

router.post("/posts/regist/confirm", (req, res) => {
  var original = createRegistData(req.body);
  var errors = validateRegistData(req.body);
  if (errors) {
    res.render("./account/posts/regist-form.ejs", {errors, original});
    return;
  }
  res.render("./account/posts/regist-confirm.ejs", { original });
});

router.post("/posts/regist/execute", (req, res) => {
  var original = createRegistData(req.body);
  var errors = validateRegistData(req.body);
  if (errors) {
    res.render("./account/posts/regist-form.ejs", {errors, original});
    return;
  }
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    var db = client.db(DATABSE);
    db.collection("posts")
      .insertOne(original)
      .then(()=>{
        res.render("./account/posts/regist-complete.ejs", { original });
      }).catch((error)=> {
        throw error;
      }).then(() =>{
        client.close();
      });
  });
  
});

module.exports = router;