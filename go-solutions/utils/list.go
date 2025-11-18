package utils

type ListNode struct {
	Val  int
	Next *ListNode
}

func ToSliceInt(node *ListNode) (out []int, isCycle bool) {
	seen := make(map[*ListNode]struct{})
	for curr := node; curr != nil; curr = curr.Next {
		if _, ok := seen[curr]; ok {
			return []int{}, true
		}
		out = append(out, curr.Val)
		seen[curr] = struct{}{}
	}

	return out, false
}

func ToList(vals []int) *ListNode {
	dummy := &ListNode{}
	curr := dummy
	for _, val := range vals {
		curr.Next = &ListNode{Val: val}
		curr = curr.Next
	}
	return dummy.Next
}
