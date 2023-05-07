class Node {
    constructor(val) {
        this.head = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // current = null;
        this.tail = newTail
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

    }

    shift() {
        // console.log(this)
        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
        let current = this.head;
        this.head = current.next;
        console.log(this)
        }
        this.length -= 1;
    }

    unshift(newNode) {
        let currentHead = this.head;
        this.head = new Node(newNode);
        this.head.next = currentHead;
        if (!this.length) {
            this.tail = this.head;
        }
        this.length += 1;
    }

    get(index) {
        if(index<0 || index>=this.length) return false
        let current = this.head;
        let i = 0;
        while (i<index) {
            current = current.next;
            i++;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        // console.log(node)
        if (!node) return false;
        node.head = value;
        return true;
    }

    insert(index, value) {
        let newNode = new Node(value);
        if (index < 0 || index >= this.length) return false;
        if (index == 0) {
            this.unshift(newNode);
            return true;
        }
        // console.log(this.length)
        if (index === this.length-1) {
            this.push(newNode);
            return true;
        }
        let i = 0;
        let current = this.head;
        while (i < index) {
            current = current.next;
        }
        let after = current.next;
        newNode.next = after;
        // console.log(newNode)
        current.next = newNode;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push("Hi sathish");
// list.push("how are you");
// list.push("I'm doing good")
// console.log(list);
// list.pop();
// list.pop();
console.log(list.insert(1,"Sathish"))
console.log(list);
// list.shift();
// list.unshift("Hey Sathish kumar")
// list.unshift("Hey Sathishu")
// list.unshift("Hey Sathishin")
// // list
// // console.log(list);
// list.set(2, "Kumaran");
// console.log(list.get(1))
// console.log(list.get(2));

// console.log(list.head,list.head.next,list.head.next.next);
