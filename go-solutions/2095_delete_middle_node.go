package leetcode

import "go-solutions/utils"

func deleteMiddle(head *utils.ListNode) *utils.ListNode {
	if head == nil || head.Next == nil {
		return nil
	}

	slow, fast := head, head
	for {
		tmp := slow
		slow = slow.Next
		fast = fast.Next.Next
		if fast == nil || fast.Next == nil {
			tmp.Next = slow.Next
			break
		}
	}
	return head
}
