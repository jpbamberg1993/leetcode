package leetcode

import "go-solutions/utils"

func maxDepth(root *utils.TreeNode) int {
	return searchDepth(root, 0)
}

func searchDepth(node *utils.TreeNode, runningMax int) int {
	if node == nil {
		return runningMax
	}
	runningMax++
	leftMax := searchDepth(node.Left, runningMax)
	rightMax := searchDepth(node.Right, runningMax)
	return max(leftMax, rightMax)
}
