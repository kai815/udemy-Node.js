var Fibonacci = function () {
  this.val0 = 0;
  this.val1 = 1;
  this.timerId = undefined;
};

Fibonacci.prototype.start = function () {
  if (this.timerId) {
    this.stop();
  }

  var self = this;
  
  this.timerId = setInterval(function(){
    // F(n) を表示
    console.log(self.val0);

    // F(n+2) = F(n) + F(n+1)
    var val2 = self.val0 + self.val1;
    self.val0 = self.val1;
    self.val1 = val2;
  }, 1000);
};

Fibonacci.prototype.stop = function () {
  if (this.timerId) {
    clearInterval(this.timerId);
    this.timerId = undefined;
  }
};

var fibonnaci = new Fibonacci();
fibonnaci.start();
