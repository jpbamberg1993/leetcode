package leetcode

import "go-solutions/utils"

func reverseList(head *utils.ListNode) *utils.ListNode {
	var prev *utils.ListNode
	curr := head
	for curr != nil {
		next := curr.Next
		curr.Next = prev
		prev = curr
		curr = next
	}
	return prev
}
