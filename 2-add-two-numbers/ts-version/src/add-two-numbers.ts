export class LinkedList {
  first: ListNode
  last: ListNode
  size: number

  addLast(item: number): void {
    const node = new ListNode(item)

    if (size === 0) {
      first = last = node
    } else {
      last.next = node
      last = node
    }

    size++
  }

  arrayToList(arr: int[]): void {
    for (const item of arr) {
      addLast(item)
    }
  }
}

export class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

}
