class NNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BSTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newnode = new NNode(value)

    if (!this.root) {
      this.root = newnode
      return
    }
    this._insertNode(this.root, newnode)
  }
  _insertNode(currentNode, newnode) {
    if (newnode.value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newnode
        return
      }
      this._insertNode(currentNode.left, newnode)
    } else {
      if (!currentNode.right) {
        currentNode.right = newnode
        return
      }
      this._insertNode(currentNode.right, newnode)
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

let one = new BSTree()

one.insert(6)
one.insert(4)
one.insert(2)
one.insert(9)
one.insert(3)
one.insert(7)
one.insert(5)
one.printTree()
