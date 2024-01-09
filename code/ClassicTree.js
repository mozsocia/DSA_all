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
