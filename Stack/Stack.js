//internal implementation of stack using array

class Stack {
  constructor() {
    this.items = []; // array to hold stack elements
  }

  // push element
  push(element) {
    this.items.push(element);
  }

  // remove top element
  pop() {
    if (this.isEmpty()) return "Stack Underflow";
    return this.items.pop();
  }

  // view top element
  peek() {
    if (this.isEmpty()) return "Stack is Empty";
    return this.items[this.items.length - 1];
  }

  // check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size of stack
  size() {
    return this.items.length;
  }
}

// Example usage
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // 30
console.log(stack.pop());   // 30
console.log(stack.size());  // 2


// let stack=[];

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack);

// //peek
// console.log("top most element:",stack[stack.length-1])

// //po
// console.log("popped element:",stack.pop());

// console.log(stack);

// //is empty
// console.log("is stack empty?",stack.length==0);

// //size
// console.log("size of stack:",stack.length);
