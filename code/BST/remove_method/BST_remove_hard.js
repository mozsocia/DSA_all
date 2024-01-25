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
        this.root = this._removeRecursive(this.root, value);
    }

    _removeRecursive(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this._removeRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this._removeRecursive(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                node.value = this._findMinValue(node.right);
                node.right = this._removeRecursive(node.right, node.value);
            }
        }

        return node;
    }

    _findMinValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
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

bstone.remove(5)

bstone.printTreeString()