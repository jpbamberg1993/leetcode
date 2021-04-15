import { ListNode } from "./ListNode";

export class LinkedList {
  first: ListNode;
  last: ListNode;
  size: number = 0;

  addLast(item: number): void {
    const node = new ListNode(item);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
  }

  arrayToList(arr: number[]): void {
    for (const item of arr) {
      this.addLast(item);
    }
  }

  private isEmpty(): boolean {
    return this.size === 0;
  }
}
