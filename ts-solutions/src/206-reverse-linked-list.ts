import { ListNode } from '../utils/list-node'

export function reverseList(head: ListNode | null): ListNode | null {
	let previousNode: ListNode | null = null
	let currentNode: ListNode | null = head
	while (currentNode) {
		const next = currentNode.next
		currentNode.next = previousNode
		previousNode = currentNode
		currentNode = next
	}
	return previousNode
}
