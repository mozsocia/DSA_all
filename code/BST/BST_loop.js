class NNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newnode = new NNode(value)
    if (!this.root) {
      this.root = newnode
      return this
    }
    let current = this.root

    while (true) {
      if (newnode.value < current.value) {
        if (!current.left) {
          current.left = newnode
          return this
        }
        current = current.left

      } else {
        if (!current.right) {
          current.right = newnode
          return this
        }
        current = current.right

      }
    }
  }
  lookup(value) {
    let current = this.root

    while (current) {

      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return current
      }

    }
    return false
  }

}



let bstone = new BST()
bstone.insert(9)
bstone.insert(15)
bstone.insert(4)
bstone.insert(2)
bstone.insert(7)
bstone.insert(6)
bstone.remove(4)
console.log(bstone)
