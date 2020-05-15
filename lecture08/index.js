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
  this.message = "わんわん";
};
Dog.prototype = Animal.prototype;

var dog = new Dog();

console.log(dog.say());