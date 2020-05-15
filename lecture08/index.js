var util = {};

util.inherits = function (child, parent) {
  child.prototype = parent.prototype;
  child.prototype.constructor = parent;
};

util.base = function (self, ...args) {
  //インスタンスからprototypeを取得
  var prototype = Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
};

var Animal = function () {
  this.message = "hoge";
};

Animal.prototype = {
  message: ".....",
  say: function () {
    return this.message;
  }
};

var Dog = function () {
  util.base(this);
  this.message = "わんわん";
};
util.inherits (Dog, Animal);
var dog = new Dog();

console.log(dog.say());