from node import Node

class LinkedList:
  def __init__(self):
    self.__head = None
    self.__tail = None

  def add(self, value):
    node = Node(value)
    if not self.get_head():
      self.set_head(node)
    else:
      self.get_tail().set_next(node)
    self.set_tail(node)

  def size(self):
    length = 0
    node = self.get_head()
    while node:
      length +=1
      node = node.get_next()
    return length

  def empty(self):
    return self.size() == 0

  def get_head(self):
    return self.__head

  def set_head(self, head):
    self.__head = head

  def get_tail(self):
    return self.__tail

  def set_tail(self, tail):
    self.__tail = tail
