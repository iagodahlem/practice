import unittest
from linked_list import LinkedList

class TestLinkedList(unittest.TestCase):
  def test_add(self):
    list = LinkedList()
    list.add(1)
    list.add(2)
    print(list)
