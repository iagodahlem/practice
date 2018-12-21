require_relative './node'

class LinkedList
  def initialize()
    @head = nil
    @tail = nil
  end

  def add(value)
    node = Node.new(value)

    if @head == nil
      @head = node
    else
      @tail.next = node
    end

    @tail = node
  end

  def value_at(index)
    node_at(index).value
  end

  def node_at(index)
    node = @head

    for i in (1..size)
      if i == index
        break
      end

      node = node.next
    end

    node
  end

  def empty
    size == 0
  end

  def size
    length = 0
    node = @head

    while node != nil
      length += 1
      node = node.next
    end

    length
  end
end
