class Hash {
  constructor() {
    this.Max = 10;
    this.arr = new Array(this.Max).fill("empty");
  }

  hashMidSqFun(key) {
    let sq = key * key;
    let keyIndex = sq.toString().slice(2, 3);

    return Number(keyIndex);
  }

  addItem(key, value) {
    let pos = this.hashMidSqFun(key);
    this.arr[pos] = value;
  }

  getItem(key) {
    let pos = this.hashMidSqFun(key);
    return this.arr[pos];
  }
  getAllValues(arr) {
    for (const value of arr) {
      console.log(value);
    }
  }
}

const obj = new Hash();

obj.addItem(234, "March 2020");
obj.addItem(345, "March 2021");
obj.addItem(445, "March 2022");
obj.addItem(553, "March 2023");

console.log(`Items at 234: ${obj.getItem(234)}`);
obj.getAllValues(obj.arr);

// obj.hashFunction("March 2026");
// console.log(obj.hashFunction("March 2026"));
