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
    this.root = this._addNode(this.root, newNode);
  }

  _addNode(currentNode, newNode) {
    if (!currentNode) return newNode;


    if (Math.random() < 0.5) {
      currentNode.left = this._addNode(currentNode.left, newNode);
    } else {
      currentNode.right = this._addNode(currentNode.right, newNode);
    }
    return currentNode
  }

  _addNode2(currentNode, newNode) {
    if (!currentNode) {
      return newNode;
    }
    if (!currentNode.left) {
      currentNode.left = newNode;
    } else if (!currentNode.right) {
      currentNode.right = newNode;
    } else {
      if (this.customCheck(newNode.value)) {
        currentNode.left = this._addNode2(currentNode.left, newNode);
      } else {
        currentNode.right = this._addNode2(currentNode.right, newNode);
      }
    }
    return currentNode;
  }
  
  customCheck(number) {
    // Apply any mathematical transformation you like
    // For example, you can use the square root and check if it's an integer
    let result = number * number;

    // Convert the result to a boolean (true/false)
    return result % 2 === 0 && result % 3 === 0;
  }

  printTree() {
    this._printTree(this.root, 0);
  }

  _printTree(node, level) {
    if (node) {
      this._printTree(node.right, level + 1);
      console.log("  ".repeat(level) + "-" + node.value);
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

binaryTree.printTree();

// console.dir(binaryTree, { depth: null });
