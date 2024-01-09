class Node {
    constructor(value, priority) {
        this.value = value
        this.next = null
        this.priority = priority
    }
}

class QueueList {
    constructor() {
        this.front = null
        this.rear = null
    }

    enqueueDesc(value, priority) {
        let newNode = new Node(value, priority)
        if (!this.front) {
            this.front = newNode
            this.rear = newNode
            return true
        } 
        if (newNode.priority > this.front.priority) {
            newNode.next = this.front
            this.front = newNode
            return true
        } 

        if (newNode.priority < this.rear.priority) {
            this.rear.next = newNode
            this.rear = newNode
            return true
        } 

        let current = this.front
        while(newNode.priority < current.next.priority){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode

    }

    enqueueAsc(value, priority) {
        let newNode = new Node(value, priority)
        if (!this.front) {
            this.front = newNode
            this.rear = newNode
            return true
        } 
        if (newNode.priority > this.rear.priority) {
            this.rear.next = newNode
            this.rear = newNode
            return true
        } 

        if (newNode.priority < this.front.priority) {
            newNode.next = this.front
            this.front = newNode
            return true
        } 

        let current = this.front

        while(newNode.priority > current.next.priority){
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode

    }

    dequeue() {
        if (!this.front) {
            return null
        }

        let temp = this.front

        this.front = this.front.next

        if (!this.front) {
            this.rear = null
        }
        return temp.value
    }
}


let one = new QueueList()

/*
  front                rear
  |                    |
  34-> 89-> 22-> 98-> 65->null
  8    7    5     3    1
*/
one.enqueueAsc(98,3)
one.enqueueAsc(65,1)
one.enqueueAsc(34,8)
one.enqueueAsc(22,5)
one.enqueueAsc(89,7)
one.enqueueAsc(23,5)


// console.log(one.dequeue())
// console.log(one.dequeue())

// console.log(one)
console.dir(one, { depth: null });
