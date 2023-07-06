import { ListNode } from '../utils/list-node'

export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const dummyHead = new ListNode()
	let currentHead: ListNode | null = dummyHead
	while (list1 || list2) {
		if (list1 === null) {
			currentHead.next = list2
			currentHead = currentHead.next
			break
		}
		if (list2 === null) {
			currentHead.next = list1
			currentHead = currentHead.next
			break
		}
		if (list1 != null && list1.val <= list2.val) {
			currentHead.next = new ListNode(list1.val)
			list1 = list1.next
			currentHead = currentHead.next
			continue
		}
		if (list2 != null && list2.val <= list1.val) {
			currentHead.next = new ListNode(list2.val)
			list2 = list2.next
			currentHead = currentHead.next
			continue
		}
	}

	return dummyHead.next
}
