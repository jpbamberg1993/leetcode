package leetcode

import "go-solutions/utils"

func maxDepth(root *utils.TreeNode) int {
	return findMaxDepth(root, 0)
}

func findMaxDepth(node *utils.TreeNode, runningMax int) int {
	if node == nil {
		return runningMax
	}
	runningMax++
	leftCount := findMaxDepth(node.Left, runningMax)
	rightCount := findMaxDepth(node.Right, runningMax)
	return max(leftCount, rightCount)
}
