// ************** SINGLY LINKED LIST *****************
// Uses:

/*
 * Used in React by Fiber Reconsiler to perform task in order of their parent child relationship.


*/

// (HEAD) 1 --> 2 --> 3 --> 4 --> 5 (TAIL) --> null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return current.val;
  }

  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    if (index < 0 || index > this.length) return null;
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.pop();
    if (index === this.length) return !!this.shift();
    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return true;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // 1 --> 2 --> 3 --> 4 --> null
  // prev = null, curr, temp
  // null <--  1   <--  2 --> 3  --> 4
  // prev     curr     next
  // take three pointers prev, curr, temp

  // ****** REVERSE LINKED LIST VVVV..IMPORTANT ******
  reverse() {
    let cur = this.head;
    this.head = this.tail;
    this.tail = cur;
    let prev = null;
    let next;
    while (cur != null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return this;
  }
}
const newList = new SinglyLinkedList();
let arr = [1, 1, 2, 3, 3];
for (let i = 0; i < arr.length; i++) {
  newList.push(arr[i]);
}

let head = newList.head;
// console.log(head);
let set = new Set();
let list = head;
let temp = list;
let current = head;
while (current !== null) {
  if (!set.has(current.val)) {
    set.add(current.val);
  } else {
    temp.next = temp.next.next;
    temp = temp.next.next;
 
  }
  current = current.next;
}
