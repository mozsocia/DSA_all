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
    this.root = this._insertNode(this.root, newnode)
  }

  _insertNode(current, newnode) {
    if (!current) {
      return newnode
    }

    if (newnode.value < current.value) {
      current.left = this._insertNode(current.left, newnode)
    } else {
      current.right = this._insertNode(current.right, newnode)
    }

    return current
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
// console.log(one)
