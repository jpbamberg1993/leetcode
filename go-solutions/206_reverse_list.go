package leetcode

import "go-solutions/utils"

func reverseList(head *utils.ListNode) *utils.ListNode {
	var prevNode *utils.ListNode
	currentNode := head
	for currentNode != nil {
		tmp := currentNode.Next
		currentNode.Next = prevNode
		prevNode = currentNode
		currentNode = tmp
	}
	return prevNode
}
