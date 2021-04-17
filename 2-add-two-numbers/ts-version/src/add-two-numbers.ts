import { ListNode } from "./ListNode"

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0)
  let p1 = l1, p2 = l2, currentNode = dummyHead
  let carry = 0

  while (p1 || p2) {
    const x = p1 ? p1.val : 0 
    const y = p2 ? p2.val : 0
    const result = x + y + carry
    currentNode.next = new ListNode(result % 10)
    currentNode = currentNode.next
    carry = result >= 10 ? 1 : 0
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry)
  }

  return dummyHead.next
}
