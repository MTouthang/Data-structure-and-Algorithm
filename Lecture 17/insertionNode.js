// empty node declaration ---
class Node {
  constructor(data) {
    this.data = data;
    this.nextPtr = null;
  }
}

// list init --
class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert the new node at the beginning of the linkedlist
  insertAtBeginning(newData) {
    // create a new node for the new_data
    var new_node = new Node(newData);
    // insertion at the beginning of the linked list
    new_node.nextPtr = this.head;
    this.head = new_node;
  }

  insertAtEnd(newData) {
    // create a new node for the new data
    let new_node = new Node(newData);

    // check whether linked list is empty or different
    if (this.head === null) {
      this.head = new_node;
      return;
    }

    var temp = this.head;
    while (temp.nextPtr) {
      temp = temp.nextPtr;
    }
    temp.nextPtr = new_node;
  }

  // insert the new node after any of the previous node -----
  insertAfterNode(prev_node, newData) {
    if (prev_node === null) {
      console.log("Given node must be available in your linked list");
      return;
    }

    // create a new linked list
    let new_node = new Node(newData);
    new_node.nextPtr = prev_node.nextPtr;
    prev_node.nextPtr = new_node;
  }

  // print link list
  printLinkedList() {
    var temp = this.head;
    var str = "";
    while (temp) {
      str += temp.data + " ";
      //   console.log(str + " ");
      temp = temp.nextPtr;
    }
    console.log(str);
  }
}
let llist = new LinkedList();
// insert at the beginning---
// llist.insertAtBeginning(10);
// llist.insertAtBeginning(20);
// llist.insertAtBeginning(30);
// llist.insertAtBeginning(40);
// llist.insertAtBeginning(50);

// insert at the end
llist.insertAtEnd(10);
llist.insertAtEnd(20);
llist.insertAtEnd(30);
llist.insertAtEnd(40);
llist.insertAtEnd(50);
llist.printLinkedList();

llist.insertAfterNode(llist.head.nextPtr, 55);
console.log("Insertion nodes after second node of the linkedlist");
llist.printLinkedList();
