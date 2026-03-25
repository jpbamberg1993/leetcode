package leetcode

import (
	"go-solutions/utils"
)

func pairSum(head *utils.ListNode) int {
	middle := findMiddle(head)
	reversed := reverseList(middle.Next)
	maxPair := 0
	for reversed != nil {
		maxPair = max(reversed.Val+head.Val, maxPair)
		reversed = reversed.Next
		head = head.Next
	}
	return maxPair
}

func findMiddle(head *utils.ListNode) *utils.ListNode {
	slow, fast := head, head.Next
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}
