class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  push(val) {
    this.pushStack.push(val);
  }

  pop() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    console.log(`PopItem: ${this.popStack.pop()}`);
    return this.popStack.pop();
  }

  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    console.log(`Peek item: ${this.popStack[this.popStack.length - 1]}`);
    return this.popStack[this.popStack.length - 1];
  }

  empty() {
    console.log(
      `Empty Queue:-${!this.pushStack.length && !this.popStack.length} `
    );
    return !this.pushStack.length && !this.popStack.length;
  }
}

let myQueue = new MyQueue();

myQueue.push(10);
myQueue.push(20);
myQueue.push(30);

myQueue.pop();
myQueue.peek();
myQueue.empty();
