// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value, next) {
      this.value = value
      this.next = next


  }


}

class Stack { // LIFO - last in, first out
  constructor() {
      this.top = null
      this.length = 0


  }
  pop() { // O(1)
      if (!this.length) return null;

      let newNode = new Node();
      let curr = this.top;
      // let popped = curr.pop(newNode)
      while (){};

      this.length--;


      if (this.length >= 2) {
         curr = newNode
          // newNode.pop(curr.next)
      
      }

      if (this.length === 1) {
         this.top = null
     }  

  }

  push(input) {
      let newNode = new Node(input); // c
      let curr = this.top; // b
     
      if (!curr) {
          this.top = newNode
      } else {
          this.top = newNode;
          newNode.next = curr;
      }
      this.length++
          return this.length
  }

  
  size() { // O(1)
      return this.store.length;
  }

}

exports.Node = Node;
exports.Stack = Stack;
