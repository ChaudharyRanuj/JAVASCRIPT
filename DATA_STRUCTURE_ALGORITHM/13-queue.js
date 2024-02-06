/*
BIG OF QUEUE

INSERTION -  O(1)
REMOVAL -  O(1)
SEARCHING -  O(N)
ACCESS -  O(N)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    ++this.size;
    return this;
  }

  dqueue() {
    if (!this.first) return undefined;
    var temp = this.first;
    if (this.first === this.last) return (this.last = null);
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

const newQueue = new Queue();
console.log(newQueue);
newQueue.enqueue("first task");
newQueue.enqueue("second task");
newQueue.enqueue("third task");
newQueue.enqueue("fourth task");
console.log(newQueue);
console.log(newQueue.dqueue());
console.log(newQueue.dqueue());
console.log(newQueue);
