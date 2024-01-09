class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class QueueList {
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(value){
        let newNode = new Node(value)
        if (!this.front) {
            this.front = newNode
            this.rear = newNode
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue(){
        if(!this.front){
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

one.enqueue(43)
one.enqueue(34)




console.log(one.dequeue())
console.log(one.dequeue())

// console.log(one)
console.dir(one, {depth: null});
