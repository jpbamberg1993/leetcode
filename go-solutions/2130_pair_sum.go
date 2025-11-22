package leetcode

import (
	"go-solutions/utils"
)

func pairSum(head *utils.ListNode) int {
	middle := getMiddle(head)
	reverse := reverseList(middle)
	maxSum := 0
	for reverse != nil {
		maxSum = max(maxSum, reverse.Val+head.Val)
		head = head.Next
		reverse = reverse.Next
	}
	return maxSum
}

func getMiddle(head *utils.ListNode) *utils.ListNode {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}
