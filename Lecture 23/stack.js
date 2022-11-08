class Stack {
  constructor() {
    this.items = []; // container of the value
    this.count = 0; // index value of the container
  }

  // add element to top of stack
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count += 1;
    return this.count - 1; // return the index of the added value
  }

  // return and remove the top element in stack
  // return undefine if stack is empty
  pop() {
    if (this.count == 0) {
      console.log(`Stack is empty`);
      return undefined;
    } else {
      let deleteItem = this.items[this.count - 1];
      this.count -= 1;

      console.log(`${deleteItem} is removed`);
      return deleteItem;
    }
  }

  // check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "stack is empty" : "stack is not Empty");
    return this.count == 0;
  }

  // check the size of the stack
  size() {
    console.log(`The size of the stack is ${this.count}`);
    return this.count;
  }

  // print element is stack --
  printStack() {
    // let str =""
    for (let i = 0; i < this.count; i++) {
      console.log(`items : ${this.items[i]}`);
    }
  }

  // clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`stack is clear!`);
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

stack.pop();
stack.pop();
stack.isEmpty();
stack.size();

stack.printStack();
stack.clear();
