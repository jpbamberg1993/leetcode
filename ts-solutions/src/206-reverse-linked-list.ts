import { ListNode } from '../utils/list-node'

export function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null
	let currentNode: ListNode | null = new ListNode(head?.val)
	head = head?.next ?? null
	while (head) {
		const node = new ListNode(head.val, currentNode)
		currentNode = node
		head = head.next
	}
	return currentNode
}
