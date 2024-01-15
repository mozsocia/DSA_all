class NNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class ClassicTree {
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
      if (Math.random() < 0.5) {
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


  DeapthFirstSearch() {
    this._inOrderTravarsal(this.root)
  }

  _inOrderTravarsal(node) {
    if (node) {
      this._inOrder(node.left)
      console.log(node.value)
      this._inOrder(node.right)
    }
  }




  printTree() {
    console.log("-------------------")
    this._printTree(this.root, 0);
    console.log("-------------------")

  }

  _printTree(node, level) {
    if (node) {
      this._printTree(node.right, level + 1);
      console.log("  ".repeat(level) + node.value);
      this._printTree(node.left, level + 1);
    }
  }



  /* =========================================
  * below code for use in my mobile Acode editor
  * 
  ============================================*/



  InOrderTravarse() {
    let list = []
    this._inOrder(this.root, list)
    console.log(list)
  }

  _inOrder(node, list) {
    if (node) {
      this._inOrder(node.left, list)
      list.push(node.value)
      this._inOrder(node.right, list)
    }
  }



  printTreeString() {
    const output = "-------------------\n"

    const treeString = this._printTreeString(this.root, 0);

    console.log(output.concat(treeString, output));


  }

  _printTreeString(node, level) {
    if (node) {
      const rightSubtree = this._printTreeString(node.right, level + 1);

      let currentLine = "  ".repeat(level) + "-" + node.value + "\n";
      const leftSubtree = this._printTreeString(node.left, level + 1);
      return rightSubtree + currentLine + leftSubtree;
    }

    return "";
  }
}

// Example usage:
const binaryTree = new ClassicTree();
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(15);
binaryTree.insert(4);
binaryTree.insert(1);
binaryTree.insert(16);
binaryTree.insert(7);



binaryTree.printTreeString()
binaryTree.InOrderTravarse()