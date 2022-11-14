class Hash {
  constructor() {
    this.max = 10;
    this.arr = new Array(this.max).fill(null);
  }

  /**Open Addressing: quadraticProbing hash function */
  hashQuadFunc(value) {
    let index1 = value % this.max;
    let index2;
    let collision = 0;

    // no collision
    if (this.arr[index1] == null) {
      console.log(`index: ${index1}`);
      return index1;
    } else {
      while (collision >= 0) {
        index2 = (index1 + collision + collision ** 2) % this.max;
        if (this.arr[index2] == null) {
          return index2;
        }
        collision += 1;
      }
    }
  }

  /** adding value -- */
  addValue(value) {
    let index = this.hashQuadFunc(value);
    return (this.arr[index] = value);
  }
}

const obj = new Hash();

obj.addValue(75);
obj.addValue(99);
obj.addValue(50);
obj.addValue(20);
obj.addValue(35);
obj.addValue(88);
obj.addValue(45);
obj.addValue(23);
obj.addValue(55);
obj.addValue(67);

console.log(obj.arr);
