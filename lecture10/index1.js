var p1 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Hello World.");
    // reject("Hello World.");
  }, 100);
});

p1.then((value) => {
  //thenの第一引数
  console.log(`.then() onfullfiled : ${value}`);
}, (reason) => {
  //thenの第二期数
  console.log(`.then() onrejected  : ${reason}`);
});

//エラーがあった時
p1.catch((reason)=>{
  console.log(`.catch() onrejected : ${reason}`);
});