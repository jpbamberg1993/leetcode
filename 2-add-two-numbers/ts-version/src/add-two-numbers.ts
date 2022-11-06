import {ListNode} from "./list-node";

export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
    const dummyHead = new ListNode(0);
    let currentHead = dummyHead;
    let carry = 0;

    while (l1 != null || l2 != null || carry !== 0) {
        const value = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = value >= 10 ? 1 : 0;
        currentHead.next = new ListNode(value % 10);
        currentHead = currentHead.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummyHead.next;
}