var EventEmitter = require("events").EventEmitter;
var util = require("util");

var Animal = function (){
  EventEmitter.call(this);
};
util.inherits(Animal, EventEmitter);

Animal.prototype.message = "qwert";

Animal.prototype.say = function(){
  console.log(this.message);
  this.emit("say", this.message)
}

var Dog = function() {
  Animal.call(this);
  this.message = "ワンワン"
};
util.inherits(Dog, Animal);
var dog = new Dog();

//emitで発火
dog.on("say", function(message){
  console.log(`「${message}」と叫んだ。`)
})

dog.say();