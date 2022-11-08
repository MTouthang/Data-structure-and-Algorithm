var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

// adding of item
MyStack.prototype.push = function (x) {
  console.log(`item : ${x} added`);
  this.queue1.push(x);
};

// removing of item
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let poped = this.queue1.shift();
  this.queue1 = this.queue2;
  this.queue2 = [];
  console.log(`item: ${poped} is poped`);
  return poped;
};

MyStack.prototype.top = function () {
  console.log(`top item: ${this.queue1[this.queue1.length - 1]}`);
  return this.queue1[this.queue1.length - 1];
};

MyStack.prototype.empty = function () {
  return this.queue1.length ? false : true;
};

var obj = new MyStack();

obj.push(10);
obj.push(20);

obj.pop();
obj.top();
console.log("stack empty:" + obj.empty());

console.log(obj);
