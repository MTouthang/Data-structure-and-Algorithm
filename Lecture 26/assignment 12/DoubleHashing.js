class Hash {
  constructor() {
    this.max = 10;
    this.arr = new Array(this.max).fill(null);
  }

  /**Open Addressing: quadraticProbing hash function */
  doubleHashFunc(value) {
    let index1 = value % this.max;
    let index2;
    let index3;
    let collision = 0;
    let count;

    // no collision
    if (this.arr[index1] == null) {
      return index1;
    } else {
      // collision --
      index2 = 1 + (value % (this.max - 2));
      if (this.arr[index2] == null) {
        return index2;
      }
      while (collision >= 0 && count <= 5) {
        console.log(`collision: ${collision}`);
        index3 = index1 + ((collision * index2) % this.max);

        if (this.arr[index3] == null) {
          return index3;
        }
        collision += 1;
        count += 1;
      }
    }
  }

  /** adding value -- */
  addValue(value) {
    let index = this.doubleHashFunc(value);
    if (index !== undefined) {
      return (this.arr[index] = value);
    }
  }

  /** get item via key */
  getItem(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == value) {
        return i;
      }
    }
    return "value not available";
  }
}

const obj = new Hash();

obj.addValue(50);
obj.addValue(75);
obj.addValue(99);
obj.addValue(20);
obj.addValue(35);
obj.addValue(88);
obj.addValue(45);
obj.addValue(23);
obj.addValue(55);
obj.addValue(67);
console.log(obj.arr);

console.log(`The value if present at index: ${obj.getItem(20)}`);
