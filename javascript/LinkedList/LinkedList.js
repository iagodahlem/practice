const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }

    this.tail = node
  }

  valueAt(index) {
    return this.nodeAt(index).value
  }

  nodeAt(index) {
    const length = this.size()

    if (index > length || index < 0) {
      throw new Error('Index out of bounds.')
    }

    let node = this.head

    for (let i = 1; i < index; i++) {
      node = node.next
    }

    return node
  }

  size() {
    let length = 0
    let node = this.head

    while (node) {
      length++
      node = node.next
    }

    return length
  }

  empty() {
    return this.size() === 0
  }
}

module.exports = LinkedList
