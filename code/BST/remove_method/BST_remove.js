class NNode {
    constructor(value) {
        this.value = value
        this.parent = null
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
                    newnode.parent = current
                    current.left = newnode
                    return this
                }
                current = current.left

            } else {
                if (!current.right) {
                    newnode.parent = current
                    current.right = newnode
                    return this
                }
                current = current.right

            }
        }
    }

    remove(value) {
        let node = this.lookup(value)

        if (!node) {
            return; // Node not found
        }

        if (!node.left && !node.right) {
            // Case 1: Node has no children

            if (!node.parent) {
                this.root = null;
            }

            if (node.parent.left == node) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }
        }
        else if (!node.left) {
            // Case 2: Node has only right child
            this._replaceNodeInParent(node, node.right)
        }
        else if (!node.right) {
            // Case 3: Node has only left child
            this._replaceNodeInParent(node, node.left)
        }
        else {
            // Case 4: Node has both left and right children
            let minInRight = this._findMin(node.right)
            node.value = minInRight.value
            this._replaceNodeInParent(minInRight, minInRight.right)

        }
    }

    _replaceNodeInParent(node, newNode) {
        if (!node.parent) {
            this.root = newNode;
        }

        if (node === node.parent.left) {
            node.parent.left = newNode;
        } else {
            node.parent.right = newNode;
        }
        if (newNode) {
            newNode.parent = node.parent;
        }
    }

    _findMin(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }

    lookup(value) {
        let node = this.root

        while (node) {
            if (value < node.value) {
                node = node.left
            } else if (value > node.value) {
                node = node.right
            } else {
                return node
            }

        }
        return false
    }

    printTreeString() {
        const output = "===============\n"
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





let bstone = new BST()
bstone.insert(14)
bstone.insert(15)
bstone.insert(4)
bstone.insert(1)
bstone.insert(3)
bstone.insert(10)
bstone.insert(11)
bstone.insert(8)
bstone.insert(2)
bstone.insert(5)
bstone.insert(6)


bstone.printTreeString()

bstone.remove(4)

bstone.printTreeString()