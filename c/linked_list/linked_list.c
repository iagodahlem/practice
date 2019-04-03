int size(struct Node *list) {
  int counter = 0;

  while (list != NULL) {
    counter++;
    list = list->next;
  }

  return counter;
}
