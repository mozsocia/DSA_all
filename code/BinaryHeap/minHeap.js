class NNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

class BinaryHeap {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new NNode(value)
    if (!this.root) {
      this.root = newNode
    } else {
      this._insertNode(this.root, newNode)
      this._heapifyUp(newNode)
    }

  }
  _insertNode(node, newNode) {
    const queue = [node];

    while (queue.length > 0) {
      const current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        newNode.parent = current
        break;
      }

      if (!current.right) {
        current.right = newNode;
        newNode.parent = current
        break;
      }
      queue.push(current.left, current.right);

    }

    return this;
  }

  _heapifyUp(node) {
    if (!node.parent) return

    if (node.value < node.parent.value) {

      [node.value, node.parent.value] = [node.parent.value, node.value]

      this._heapifyUp(node.parent)
    }

  }

  _findLastNode() {
    let queue = [this.root]
    let current = null
    while (queue.length > 0) {
      current = queue.shift()
      if (current.left) {
        queue.push(current.left)
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    return current
  }

  _heapifyDown(node) {
    let min = node
    if (node.left && node.left.value < min.value) {
      min = node.left
    }
    if (node.right && node.right.value < min.value) {
      min = node.right
    }
    if (min != node) {
      [node.value, min.value] = [min.value, node.value]
      this._heapifyDown(min)
    }
  }

  extractMin() {
    let min = this.root.value
    let last = this._findLastNode()
    if (last.parent.left == last) {
      last.parent.left = null
    }
    if (last.parent.right == last) {
      last.parent.right = null
    }
    [this.root.value, last.value] = [last.value, this.root.value]
    this._heapifyDown(this.root)
    return min
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

let bstone = new BinaryHeap()
bstone.insert(9)
bstone.insert(10)
bstone.insert(4)
bstone.insert(8)
bstone.insert(7)
bstone.insert(6)
bstone.insert(5)
bstone.insert(12)
bstone.insert(14)
bstone.insert(17)
bstone.insert(13)

bstone.printTree()


console.log(bstone.extractMin())

bstone.printTree()