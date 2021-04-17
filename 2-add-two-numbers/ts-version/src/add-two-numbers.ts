import { ListNode } from "./ListNode"
import { LinkedList } from './LinkedList';

// For the leetcode solution change LinkedList to LinkedNode and return the first node
// It is too difficult to test passing the first LinkedNode here
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): LinkedList | null {
  let sum = new LinkedList()
  let carry = 0

  while (l1 && l2) {
    const result: number = l1.val + l2.val
    const added: number = carry + (result % 10)
    sum.addLast(added)
    carry = result >= 10 ? 1 : 0
    l1 = l1.next
    l2 = l2.next
  }

  let notNullNode: ListNode = l1 || l2
  while (notNullNode) {
    const result: number = carry + notNullNode.val
    const added: number = result % 10
    sum.addLast(added)
    carry = result >= 10 ? 1 : 0
    notNullNode = notNullNode.next
  }

  if (carry === 1) sum.addLast(1)
  return sum
}
