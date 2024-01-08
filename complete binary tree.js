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

        this.insertNode(newNode, queue)
    }

    insertNode(newNode, queue) {
        if (queue.length == 0) return

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
        this.insertNode(newNode, queue)

    }
}

let one = new CompleteTree()

one.insert(9)
one.insert(4)
one.insert(6)
one.insert(2)
one.insert(3)
one.insert(7)
one.insert(5)

/*
        9
    4        6
  2   3    7   5

*/


console.dir(one, { depth: null })
