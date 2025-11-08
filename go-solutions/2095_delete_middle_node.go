package leetcode

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteMiddle(head *ListNode) *ListNode {
	if head.Next == nil {
		return nil
	}

	slow := head
	fast := head
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

func toSliceInt(node *ListNode) []int {
	var response []int
	curr := node
	for curr != nil {
		response = append(response, curr.Val)
		curr = node.Next
	}
	return response
}

func toList(vals []int) *ListNode {
	dummy := &ListNode{}
	curr := dummy
	for _, val := range vals {
		curr.Next = &ListNode{Val: val}
		curr = curr.Next
	}
	return dummy.Next
}
