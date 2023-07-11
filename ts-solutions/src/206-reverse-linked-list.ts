import { ListNode } from '../utils/list-node'

export function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null
	let previousNode: ListNode | null = null
	let currentNode: ListNode | null = head
	while (currentNode) {
		const currentNodeNext = currentNode?.next
		currentNode.next = previousNode
		previousNode = currentNode
		currentNode = currentNodeNext
	}
	return previousNode
}
