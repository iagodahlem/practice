const LinkedList = require('./LinkedList')

class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  enqueue(value) {
    this.list.add(value)
  }

  empty() {
    return this.list.empty()
  }
}

module.exports = Queue
