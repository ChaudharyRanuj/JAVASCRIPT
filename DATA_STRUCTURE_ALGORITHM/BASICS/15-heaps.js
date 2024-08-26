/*
WHAT IS HEAP?

Very similar to Binary Search Tree but with some different rules.


> Points to remember about Binary Heap
# A binary heap is compact as possible

Type of Binary Heap

- MAX Binary Heap : Parent nodes are always larger than child nodes.

- MIN Binary Heap : Parent nodes are always smaller than child nodes. 

* Binary Search Tree

Why we need Heaps?

Binary heaps are used to implement Priority Queues, which are very commonly used data structures.

They are used quit a bit with graph traversal algorithms.

*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    } 
  }
}

let heap = new MaxBinaryHeap();
heap.insert(0);
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(7);
console.log(heap)
heap.insert(99);
console.log(heap)
heap.insert(100);
console.log(heap)