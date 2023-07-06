export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const dummyHead = new ListNode()
	let currentHead = dummyHead
	let l1 = list1
	let l2 = list2
	while (l1 || l2) {
		const [lesserValue, greaterValue] = [l1?.val, l2?.val].sort()
		if (lesserValue != undefined) {
			currentHead.next = new ListNode(lesserValue)
			currentHead = currentHead.next
		}
		if (greaterValue != undefined) {
			currentHead.next = new ListNode(greaterValue)
			currentHead = currentHead.next
		}

		if (l1) {
			l1 = l1.next
		}
		if (l2) {
			l2 = l2.next
		}
	}

	return dummyHead.next
}

export class ListNode {
	public val: number
	public next: ListNode | null

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
