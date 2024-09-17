class LinkedListNode<T> {
  value: T;
  nextNode: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  append(value: T): void {
    const node = new LinkedListNode(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  prepend(value: T): void {
    const node = new LinkedListNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size(): number {
    let s = 0;
    let currentNode = this.head;
    if (currentNode === null) {
      return s;
    } else {
      s++;
      while (currentNode.nextNode != null) {
        s++;
        currentNode = currentNode.nextNode;
      }
      return s;
    }
  }

  getHead(): LinkedListNode<T> | null {
    return this.head;
  }

  getTail(): LinkedListNode<T> | null {
    return this.tail;
  }

  at(index: number): T | null {
    let currentIndex = 0;
    let currentNode = this.head;
    while (true) {
      if (currentIndex === index) {
        if (currentNode != null) return currentNode?.value;
      }
      if (currentNode?.nextNode != null) {
        currentNode = currentNode?.nextNode;
        currentIndex++;
      }
    }
  }

  pop(): void {
    let currentNode = this.head;
    if (this.head) {
      if (this.head.nextNode === null) {
        this.head = null;
      } else {
        while (true) {
          if (currentNode?.nextNode != null) {
            if (currentNode.nextNode.nextNode != null) {
              currentNode = currentNode.nextNode;
            } else {
              currentNode.nextNode = null;
              break;
            }
          }
        }
      }
    }
  }

  contain(value: T): boolean {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value: T): number | null {
    let currentNode = this.head;
    let index: number = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      } else {
        index++;
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  toString(): string {
    let currentNode = this.head;
    if (this.head === null) {
      return "null";
    } else {
      let stringList: string = "";
      while (currentNode !== null) {
        stringList += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      stringList += "null";

      return stringList;
    }
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
