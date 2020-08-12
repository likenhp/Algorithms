// linked list practice in typescript

const list: any = {
  head: {
    value: 6,
    next: {
      value: 10  ,                                           
      next: {
        value: 12,
        next: {
          value: 3,
          next: null	
        }
      }
    }
  }
}

class NodeElement {
  public element: any;
  public next: any = null;

  constructor(element){
    this.element = element;
  }
}


class LinkedList {
  private length: number = 0;
  private head: any = null;

  public size = () => {
    return this.length;
  }

  public findHead = () => {
    return this.head;
  }

  public add(element: any) {
    let node = new NodeElement(element) ;
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        // keeps iterating until it reaches the end and becomes null
        currentNode = currentNode.next;
      }
      currentNode.next = element;
    }
    this.length++;
  }

  public remove(element: any) {
    let currentNode = this.head;
    let previousNode: any;
    if (currentNode.element === element) {
      // replaces this.head with next element, next could be null or a node
      this.head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode === null) {
          return false; // cannot remove non-existent element
        }
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  public isEmpty = () => {
    return this.length === 0;
  }

  public indexOf(element: any) {
    let currentNode = this.head;
    let index = -1;
    while(currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  public elementAt(index: number) {
    let currentNode = this.head;
    let count: number = 0;
    while(count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  public addAt(index: number, element: any) {
    // new node to add
    let newNode = new NodeElement(element);

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode: any;

    if (index > this.length) {
      // impossible to add beyond length
      return false;
    }
    if (index === 0) {
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    this.length++;
  }

  public removeAt(index: any) {
    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode: any;

    if (index < 0 || index >= this.length) {
      // can't remove non-existent
      return false;
    }
    if (index === 0 ) {
      this.head = currentNode.next;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.element;
  }

  public tail = () => {
    if (this.length === 0) {
      return null
    } else {
      return this.elementAt(this.length-1);
    }
  }
}