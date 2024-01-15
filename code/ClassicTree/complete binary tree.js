class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}



class CompleteTree {
  constructor() {
    this.root = null
  }

  insertOne(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return true
    }

    let queue = [this.root]

    while (queue.length > 0) {
      let current = queue.shift()
      if (!current.left) {
        current.left = newNode
        return true
      } else {
        queue.push(current.left)
      }

      if (!current.right) {
        current.right = newNode
        return true
      } else {
        queue.push(current.right)
      }

    }

  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return true
    }

    let queue = [this.root]

    while (queue.length > 0) {
      let current = queue.shift()
      if (!current.left) {
        current.left = newNode
        return true
      }

      if (!current.right) {
        current.right = newNode
        return true
      }
      queue.push(current.left, current.right)
    }
  }



  BreadFirstSearch() {
    const result = [];
    const queue = [];

    if (this.root) {
      queue.push(this.root);

      while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode.value);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

    return result;
  }

  printTree() {
    if (!this.root) return null
    this._printTree(this.root, 0)
  }
  _printTree(node, lebel) {
    if (node) {
      this._printTree(node.right, lebel + 1)
      console.log("  ".repeat(lebel) + node.value)
      this._printTree(node.left, lebel + 1)
    }
  }
}

let one = new CompleteTree()

one.insertOne(9)
one.insertOne(4)
one.insertOne(6)
one.insertOne(2)
one.insertOne(3)
one.insertOne(7)
one.insertOne(5)

/*
        9
    4        6
  2   3    7   5

*/

console.log(one.printTree())

console.log(one.BreadFirstSearch())

console.dir(one, { depth: null })
