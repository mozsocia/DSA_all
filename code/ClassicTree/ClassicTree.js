class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this._addNode(this.root, newNode);
    }
  }

  _addNode(currentNode, newNode) {
    if (!currentNode.left) {
      currentNode.left = newNode;
    } else if (!currentNode.right) {
      currentNode.right = newNode;
    } else {
      // Recursive call to find a suitable place for the new node
      if (Math.random() < 0.5) {
        this._addNode(currentNode.left, newNode);
      } else {
        this._addNode(currentNode.right, newNode);

      }
    }
  }

  _addNode2(currentNode, newNode) {
    // Recursive call to find a suitable place for the new node
    if (this.customCheck(newNode.value)) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return
      }
      this._addNode2(currentNode.left, newNode);
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return
      }
      this._addNode2(currentNode.right, newNode);
    }
  }



  customCheck(number) {
    // Apply any mathematical transformation you like
    // For example, you can use the square root and check if it's an integer
    let result = Math.sqrt(number);

    // Convert the result to a boolean (true/false)
    return Math.random() < 0.5
    // return result % 1 === 0;
  }



  _findLastNode() {
    // Helper function to find the rightmost leaf in the last level
    const queue = [this.root];
    let lastNode = this.root;

    while (queue.length > 0) {
      lastNode = queue.shift();

      if (lastNode.left) {
        queue.push(lastNode.left);
      }

      if (lastNode.right) {
        queue.push(lastNode.right);
      }
    }

    return lastNode.value;
  }

  hieght() {
    return this._heightCount(this.root);
  }

  _heightCount(node) {
    if (!node) return 0
    return 1 + this._heightCount(node.left) + this._heightCount(node.right)
  }


  printTree() {
    console.log("-----------------")
    this._printTree(this.root, 0);
    console.log("-----------------")

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
const binaryTree = new BinaryTree();
binaryTree.addNode(1);
binaryTree.addNode(2);
binaryTree.addNode(3);
binaryTree.addNode(4);
binaryTree.addNode(5);
binaryTree.addNode(6);
binaryTree.addNode(8);
binaryTree.addNode(9);
binaryTree.addNode(10);
binaryTree.addNode(11);
binaryTree.addNode(12);
binaryTree.addNode(72);
binaryTree.addNode(78);

console.log(binaryTree.hieght())

binaryTree.printTree();

/*

      12
    8
      9
  3
    5
      10
1
      72
    6
      11
  2
    4
      78
*/

// console.dir(binaryTree, { depth: null });
