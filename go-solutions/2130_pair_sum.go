package leetcode

import "go-solutions/utils"

func pairSum(head *utils.ListNode) int {
	middle := getMiddleNode(head)
	reversed := reverseList(middle)
	greatestSum := 0
	for reversed != nil {
		greatestSum = max(head.Val+reversed.Val, greatestSum)
		head = head.Next
		reversed = reversed.Next
	}
	return greatestSum
}

func getMiddleNode(head *utils.ListNode) *utils.ListNode {
	slow := head
	fast := head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}
	return slow
}
