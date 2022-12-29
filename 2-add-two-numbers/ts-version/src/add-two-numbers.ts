import { ListNode } from './list-node'

export function addTwoNumbers(listOne: ListNode, listTwo: ListNode): ListNode {
  let currentHead = new ListNode(0);
  const dummyHead = currentHead;
  let carry = 0;
  while (listOne?.val != null || listTwo?.val != null || carry != 0) {
    const valOne = listOne?.val ?? 0;
    const valTwo = listTwo?.val ?? 0;
    const val = valOne + valTwo + carry;
    currentHead.next = new ListNode(val % 10);
    currentHead = currentHead.next;

    carry = val > 9 ? 1 : 0;
    listOne = listOne?.next;
    listTwo = listTwo?.next;
  }

  return dummyHead.next;
}
