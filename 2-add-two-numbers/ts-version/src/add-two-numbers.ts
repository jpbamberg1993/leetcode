import {ListNode} from "./list-node";

export function addTwoNumbers(l1: ListNode, l2: ListNode) {
    const dummyHead: ListNode = new ListNode(0);
    let currentHead: ListNode = dummyHead;
    let carryOver: number = 0;

    while (l1 != null || l2 != null || carryOver != 0) {
        const l1Value = l1?.val ?? 0;
        const l2Value = l2?.val ?? 0;
        const sum = l1Value + l2Value + carryOver;
        carryOver = sum >= 10 ? 1 : 0;
        currentHead.next = new ListNode(sum % 10);
        currentHead = currentHead.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummyHead.next;
}