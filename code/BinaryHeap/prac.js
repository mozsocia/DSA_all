class Node {
  constructor(value) {
    this.value = value;
    this.parent = null
    this.left = null;
    this.right = null;
  }
}

class BinaryHeap {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const queue = [this.root];

    while (queue.length) {
      const current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        newNode.parent = current
        break;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        newNode.parent = current
        break;
      } else {
        queue.push(current.right);
      }
    }

    this.heapifyUp(newNode);

    return this;
  }

  heapifyUp(node) {
    let current = node;

    while (current && current.parent && current.value > current.parent.value) {
      [current.value, current.parent.value] = [current.parent.value, current.value]

      current = current.parent;
    }
  }

  extractMax() {
    if (!this.root) {
      return null;
    }

    const maxValue = this.root.value;

    // Find the last node
    const lastNode = this.findLastNode();
    if (lastNode) {
      // Swap the values of the root and the last node
      [this.root.value, lastNode.value] = [lastNode.value, this.root.value];

      // Remove the last node
      this.removeLastNode();

      // Heapify down from the root
      this.heapifyDown(this.root);
    } else {
      // If there was only one node, remove it
      this.root = null;
    }

    return maxValue;
  }

  findLastNode() {
    if (!this.root) {
      return null;
    }

    const queue = [this.root];
    let lastNode = null;

    while (queue.length) {
      lastNode = queue.shift();

      if (lastNode.left) {
        queue.push(lastNode.left);
      }

      if (lastNode.right) {
        queue.push(lastNode.right);
      }
    }

    return lastNode;
  }

  removeLastNode() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];
    let current = null;

    while (queue.length) {
      current = queue.shift();

      if (current.left) {
        if (current.left === lastNode) {
          current.left = null;
          break;
        } else {
          queue.push(current.left);
        }
      }

      if (current.right) {
        if (current.right === lastNode) {
          current.right = null;
          break;
        } else {
          queue.push(current.right);
        }
      }
    }
  }

  heapifyDown(node) {
    let current = node;

    while (current) {
      let maxChild = current.left;

      if (current.right && current.right.value > maxChild.value) {
        maxChild = current.right;
      }

      if (maxChild && maxChild.value > current.value) {
        [current.value, maxChild.value] = [maxChild.value, current.value];
        current = maxChild;
      } else {
        break;
      }
    }
  }

  printTree() {
    const treeString = this._printTree(this.root, 0);
    console.log(treeString);
  }

  _printTree(node, level) {
    if (node) {
      const rightSubtree = this._printTree(node.right, level + 1);

      let currentLine = "   ".repeat(level) + "-" + node.value + "\n";
      const leftSubtree = this._printTree(node.left, level + 1);
      return rightSubtree + currentLine + leftSubtree;
    }

    return "";
  }
}

let bstone = new BinaryHeap()
bstone.insert(9)
bstone.insert(14)
bstone.insert(10)
bstone.insert(12)
bstone.insert(4)
bstone.insert(13)
bstone.insert(17)
bstone.insert(8)
bstone.insert(7)
bstone.insert(6)
bstone.insert(5)

bstone.printTree()
// console.log(bstone)
