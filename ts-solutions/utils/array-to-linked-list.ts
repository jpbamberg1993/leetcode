import { ListNode } from './list-node'

export function arrayToLinkedList(arr: number[]): ListNode | null {
	const dummyHead = new ListNode()
	let currentNode = dummyHead
	for (const n of arr) {
		currentNode.next = new ListNode(n)
		currentNode = currentNode.next
	}
	return dummyHead.next
}
