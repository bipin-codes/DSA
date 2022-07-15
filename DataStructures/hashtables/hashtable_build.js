class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    // _val means its a private properties
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, val) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, val]);

    console.log(this.data);
  }
  get(key) {
    const hash = this._hash(key);
    const currentBucket = this.data[hash];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
  }
}

const myHashTabl = new HashTable(50);
myHashTabl.set("grapes", 10000);
myHashTabl.set("apples", 123);
myHashTabl.set("oranges", 2);

console.log(myHashTabl.keys());
