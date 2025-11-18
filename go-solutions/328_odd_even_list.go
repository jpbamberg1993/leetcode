package leetcode

import "go-solutions/utils"

func oddEvenList(head *utils.ListNode) *utils.ListNode {
	if head == nil {
		return nil
	}

	odd, even, evenHead := head, head.Next, head.Next
	for even != nil && even.Next != nil {
		odd.Next = even.Next
		odd = odd.Next
		even.Next = odd.Next
		even = even.Next
	}

	odd.Next = evenHead
	return head
}
