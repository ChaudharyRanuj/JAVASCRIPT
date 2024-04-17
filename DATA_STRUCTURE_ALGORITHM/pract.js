var MinStack = function () {
  this.minStack = [],
      this.stack = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  // push value to minStack
  if (this.minStack.length === 0) {
      this.minStack.push(val)
  } else {
      // push value in min stack if val less than top element of min stack
      let minElement = this.minStack[this.minStack.length - 1]
      if (val < minElement) {
          this.minStack.push(val)
      }
  }
  // push value to stack
  this.stack.push(val)

};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  let poppedEle = this.stack.pop()
  // if element removed from stack is equal to min value at top of minstack than pop
  let minElement = this.minStack[this.minStack.length - 1]
  if (poppedEle === minElement) {
      this.minStack.pop()
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};


  
  let newStack = new MinStack()
  
  newStack.push(-2)
  newStack.push(0)
  newStack.push(-3)
  console.log(newStack.getMin());
newStack.pop();
newStack.top()  
console.log(newStack);
  console.log(newStack.getMin());