class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class ClassicTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return
    }

    const stack = [this.root];

    while (stack.length > 0) {
      const top = stack.pop();

      if (!top.left) {
        top.left = newNode;
        return; // Exit the loop once the new node is added
      } else if (!top.right) {
        top.right = newNode;
        return; // Exit the loop once the new node is added
      } else {
        // Push the child nodes onto the stack for further exploration
        if (this.customCheck(newNode.value)) {
          stack.push(top.left);
        } else {
          stack.push(top.right);
        }
      }

    }
  }


  customCheck(number) {
    // Apply any mathematical transformation you like
    // For example, you can use the square root and check if it's an integer
    let result = Math.sqrt(number);

    // Convert the result to a boolean (true/false)
    // return Math.random() < 0.5
    return result % 1 === 0;
  }

  printTree() {
    this._printTree(this.root, 0);
  }

  _printTree(node, level) {
    if (node) {
      this._printTree(node.right, level + 1);
      console.log("  ".repeat(level) + node.value);
      this._printTree(node.left, level + 1);
    }
  }
}

// Example usage:
const binaryTree = new ClassicTree();
binaryTree.addNode(12);
binaryTree.addNode(3);
binaryTree.addNode(15);
binaryTree.addNode(4);
binaryTree.addNode(1);
binaryTree.addNode(16);
binaryTree.addNode(7);



binaryTree.printTree()

