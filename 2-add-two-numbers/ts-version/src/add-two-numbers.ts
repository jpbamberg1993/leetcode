import { ListNode } from "./ListNode"

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0)
  let currentNode = dummyHead
  let carry = 0

  while (l1 || l2) {
    const x = l1 ? l1.val : 0 
    const y = l2 ? l2.val : 0
    const sum = x + y + carry
    currentNode.next = new ListNode(sum % 10)
    currentNode = currentNode.next
    carry = sum >= 10 ? 1 : 0
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry > 0) {
    currentNode.next = new ListNode(carry)
  }

  return dummyHead.next
}
