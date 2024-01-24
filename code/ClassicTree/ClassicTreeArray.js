class BinarySearchTree {
    constructor() {
        this.tree = [];
    }

    insert(value) {
        if (this.tree.length === 0) {
            this.tree.push(value);
        } else {
            this._insertRecursively(value, 0);
        }
    }

    _insertRecursively(value, index) {
        if (value < this.tree[index]) {
            // Go to the left subtree
            const leftChildIndex = 2 * index + 1;
            if (this.tree[leftChildIndex] === undefined) {
                this.tree[leftChildIndex] = value;
            } else {
                this._insertRecursively(value, leftChildIndex);
            }
        } else {
            // Go to the right subtree
            const rightChildIndex = 2 * index + 2;
            if (this.tree[rightChildIndex] === undefined) {
                this.tree[rightChildIndex] = value;
            } else {
                this._insertRecursively(value, rightChildIndex);
            }
        }
    }


    findParent(value) {
        let nodeIndex = this._indexOf(value)
        let parentIndex = Math.floor((nodeIndex - 1) / 2)

        return this.tree[parentIndex]

    }

    search(value) {
        if (this._indexOf(value) == -1) {
            return false
        }
        return true
    }

    _indexOf(value, index = 0) {
        if (this.tree[index] === undefined) {
            return -1; // Value not found
        }

        if (value === this.tree[index]) {
            return index; // Value found
        } else if (value < this.tree[index]) {
            // Search in the left subtree
            return this._indexOf(value, 2 * index + 1);
        } else {
            // Search in the right subtree
            return this._indexOf(value, 2 * index + 2);
        }
    }

    printTree() {
        console.log("---------------------")
        this._printTreeRecursively(0, 0);
        console.log("---------------------")
        return ""
    }

    _printTreeRecursively(index, depth) {
        if (this.tree[index] === undefined) {
            return;
        }
        // Print right subtree
        this._printTreeRecursively(2 * index + 2, depth + 1);
        // Print current node
        console.log('  '.repeat(depth) + this.tree[index]);
        // Print left subtree
        this._printTreeRecursively(2 * index + 1, depth + 1);
    }
}


// Example usage:
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(8);
bst.insert(1);
bst.insert(9);
bst.insert(6);


console.log(bst.search(3)); // Output: true
console.log(bst.search(16)); // Output: false
console.log(bst.printTree())
console.log(bst.findParent(2))
console.log(bst.tree)