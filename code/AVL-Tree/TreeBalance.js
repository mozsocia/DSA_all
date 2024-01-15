class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insert(this.root, newNode);
    }
    this.balance()
  }

  _insert(node, newNode) {
    if (!node.left) {
      node.left = newNode;
    } else {
      this._insert(node.left, newNode);
    }
  }


  balance() {
    this.root = this._balance(this.root);
  }

  _balance(node) {
    if (!node) return null;

    const balanceFactor = this._height(node.left) - this._height(node.right);

    // Left Heavy
    if (balanceFactor > 1) {
      // Left-Right Case
      if (this._height(node.left.left) < this._height(node.left.right)) {
        node.left = this._leftRotate(node.left);
      }
      // Left-Left Case
      node = this._rightRotate(node);
    }
    // Right Heavy
    else if (balanceFactor < -1) {
      // Right-Left Case
      if (this._height(node.right.left) > this._height(node.right.right)) {
        node.right = this._rightRotate(node.right);
      }
      // Right-Right Case
      node = this._leftRotate(node);
    }

    node.left = this._balance(node.left);
    node.right = this._balance(node.right);

    return node;
  }

  _height(node) {
    if (!node) return 0;
    return Math.max(this._height(node.left), this._height(node.right)) + 1;
  }

  _leftRotate(node) {
    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;
    return newRoot;
  }

  _rightRotate(node) {
    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;
    return newRoot;
  }





  printTree() {
    this._printTree(this.root, 0);
  }

  _printTree(node, level) {
    if (node) {
      this._printTree(node.right, level + 1);
      console.log("  ".repeat(level) + "-" + node.data);
      this._printTree(node.left, level + 1);
    }
  }
}

// Example usage:
const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(8);
binaryTree.insert(9);
binaryTree.insert(11);
binaryTree.insert(12);
binaryTree.insert(14);
binaryTree.insert(14);
binaryTree.insert(14);
binaryTree.insert(14);




// binaryTree.balance();



binaryTree.printTree()







