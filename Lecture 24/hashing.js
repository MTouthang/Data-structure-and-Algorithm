class Hash {
  constructor() {
    this.Max = 10;
    this.arr = new Array(this.Max).fill("empty");
  }

  /**
   * modulo division hash function --
   * @param {*} key
   * @returns {Number}  summation of unicode of key, where the value have to be store
   */
  hashFunction(key) {
    let summation = 0;
    // size of the hash-table
    let m = this.Max;

    for (let i = 0; i < key.length; i++) {
      summation += key.charCodeAt(i);
    }
    // division modulo hash function
    return summation % m;
  }

  addItem(key, value) {
    let pos = this.hashFunction(key);
    this.arr[pos] = value;
  }

  getItem(key) {
    let pos = this.hashFunction(key);
    return this.arr[pos];
  }
}

const obj = new Hash();

// obj.hashFunction("March 2026");
// console.log(obj.hashFunction("March 2026"));

obj.addItem("March 2020", 234);
obj.addItem("March 2021", 345);
obj.addItem("March 2022", 445);
obj.addItem("March 2023", 553);
console.log(obj.arr);

console.log(obj.getItem("March 2020"));
