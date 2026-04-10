package leetcode

import "go-solutions/utils"

func maxDepth(root *utils.TreeNode) int {
	if root == nil {
		return 0
	}
	leftCount := maxDepth(root.Left)
	rightCount := maxDepth(root.Right)
	return max(leftCount, rightCount) + 1
}
