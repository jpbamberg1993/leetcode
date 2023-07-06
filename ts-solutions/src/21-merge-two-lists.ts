import { ListNode } from '../utils/list-node'

export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (list1 == null || list2 == null) {
		return list1 ?? list2
	}

	let head: ListNode

	if (list1.val <= list2.val) {
		head = list1
		list1 = list1?.next
	} else {
		head = list2
		list2 = list2?.next
	}

	head.next = mergeTwoLists(list1, list2)

	return head
}
