/*
input: string
output: boolean

- use stack, since we need to check the top every time we encounter a closing bracket.
- when encountering opening bracket, add to stack.
- when encountering closing bracket, see if top element on stack is the matching opening one.
  - if not, we can return false.
- at the end of the iteration, if the stack is not empty, we know they weren't all matched and return false
- if the stack is empty, return true.

D:

- stack
- ListNode
- hash table that maps opening brackets to closing brackets.

A:
- create hash table

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top ? this.top.val : null;
  }

  push(value) {
    this.top = new ListNode(value, this.top);
  }

  pop() {
    if (!this.top) return null;
    let result = this.top.val;
    this.top = this.top.next;
    return result;
  }

  isEmpty() {
    return this.top === null;
  }
}

const bracketTable = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function areMatched(str) {
  let stack = new Stack();

  for (let char of str) {
    if (char in bracketTable) {
      stack.push(char);
    } else {
      let val = stack.peek();
      if (char !== bracketTable[val]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.isEmpty();
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false