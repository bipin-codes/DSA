class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push(5);
newArray.push("something");
newArray.push("blah");
console.log(newArray);

// console.log("Removing Item");
// newArray.pop();
// console.log(newArray);

console.log("Removing item at");
newArray.delete(1);
console.log(newArray);

console.log("adding some more items");
newArray.push("val");
newArray.push("val2");
newArray.push("val12");
newArray.push("dumy");

console.log(newArray);
newArray.delete(3);
console.log(newArray);
