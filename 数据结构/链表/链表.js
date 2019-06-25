// 链表
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
    }

    push(element) {
        const node = new Node(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
        return this;
    }

    removeAt(index) {
        if (index < 0 || index > this.count) {
            return undefined;
        } else {

            let current = this.head;

            if (index === 0) {
                this.head = current.next
            } else {
                // 移除其他元素
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                // a、b、c、d、e、f、g
                // 我让 b 的 next 等于 c 的 next
                // 也就是 b 的 next 等于 d 的 element
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }
    }
}

// 结点
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

const list = new LinkedList();
list.push(3)
    .push(8)
    .push(22)
    .push(31)
    .push(44)
    .push(56)
    .push(82)
    .removeAt(2);



console.log(list);
