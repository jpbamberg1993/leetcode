import { ListNode } from '../utils/list-node'

export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const head = new ListNode()
	let tail = head
	while (list1 || list2) {
		if (list1 == null || list2 == null) {
			tail.next = list1 ?? list2
			break
		}

		if (list1.val <= list2.val) {
			tail.next = list1
			list1 = list1.next
		} else {
			tail.next = list2
			list2 = list2.next
		}

		tail = tail.next
	}

	return head.next
}
