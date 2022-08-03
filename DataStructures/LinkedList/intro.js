//Hashtable weren't ordered.
//Why to use LinkedList ?
//To insert an element we just have to move only one element where we want to insert out new element.
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// let myLinkedList = {
//   head: { value: 10, next: { value: 5, next: { value: 16, next: null } } },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    let init = 0;
    if (index >= this.length) {
      console.log("Not enough indexes!");
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let tempHead = { ...this.head };
    while (init < index - 1) {
      init++;
      tempHead = tempHead.next;
    }

    const newNode = new Node(value);
    newNode.next = tempHead.next;
    tempHead.next = newNode;
    this.length++;
  }

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode != null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr);
    console.log(`Head = ${this.head.value} Tail = ${this.tail.value}`);
  }
}

const ll = new LinkedList(10);
ll.append(20);
ll.prepend(50);
ll.append(5);
//50, 10, 20, 5

ll.insert(0, 100); //100, 50, 10, 20, 5
ll.insert(2, 300); //100, 50, 300, 10, 20, 5
ll.print();
ll.insert(5, 350); //100, 50, 300, 10, 20, 5
ll.print();
