import { ListNode } from '../utils/list-node'

export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	if (!list1 || !list2) {
		return list1 ?? list2
	}

	const dummyHead = new ListNode()
	let resultNode = dummyHead
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			resultNode.next = list1
			list1 = list1.next
		} else {
			resultNode.next = list2
			list2 = list2.next
		}
		resultNode = resultNode.next
	}
	if (list1 || list2) {
		resultNode.next = list1 ?? list2
	}

	return dummyHead.next
}
