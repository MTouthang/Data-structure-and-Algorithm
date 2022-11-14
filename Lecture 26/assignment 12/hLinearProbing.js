/**
 * class to perform Hashing with
 * Linear probing Hash function
 * i.e hf(v) = v%m (m is the size of hash table)
 * and LP(v, i) = (hf(v) + i) % m
 */
class Hash {
  constructor() {
    this.Max = 10;

    this.arr = new Array(this.Max).fill(null);
  }

  /** Open Addressing: Linear Probing hash function  */
  hashLPFunc(value) {
    let index1 = value % this.Max;
    let index2;
    let collision = 0;
    // no collision
    if (this.arr[index1] == null) {
      return index1;
    } else {
      while (collision >= 0) {
        index2 = (index1 + collision) % 10;
        if (this.arr[index2] == null) {
          return index2;
        }
        collision += 1;
      }
    }
  }

  /** Adding of value */
  addValue(value) {
    let index = this.hashLPFunc(value);
    return (this.arr[index] = value);
  }

  /** get value from the hashmap */
  getItem(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] == value) {
        return i;
      }
    }
    return "value not available";
  }
}

/**
 * Driver code
 */
const hash = new Hash();

hash.addValue(50);
hash.addValue(75);
hash.addValue(99);
hash.addValue(20);
hash.addValue(35);
hash.addValue(88);
hash.addValue(45);
hash.addValue(23);
hash.addValue(55);
hash.addValue(67);
console.log(hash.arr);
console.log(`value is present at index ${hash.getItem(67)}`);
