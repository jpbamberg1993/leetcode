package leetcode

import "go-solutions/utils"

func maxDepth(root *utils.TreeNode) int {
	if root == nil {
		return 0
	}

	left := maxDepth(root.Left)
	right := maxDepth(root.Right)

	return max(left, right) + 1
}
