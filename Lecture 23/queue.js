class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length;
  }
}

const cars = new Queue();
cars.enqueue("Honda");
cars.enqueue("Toyota");
cars.enqueue("Mazda");

console.log(cars.dequeue());
console.log(cars.peek());
