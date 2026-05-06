package leetcode

import "go-solutions/utils"

func longestZigZag(root *utils.TreeNode) int {
	maxZigZag := 0
	var dpsZigZag func(node *utils.TreeNode, goLeft bool, runningCount int)
	dpsZigZag = func(node *utils.TreeNode, goLeft bool, runningCount int) {
		if node == nil {
			return
		}
		maxZigZag = max(maxZigZag, runningCount)
		if goLeft {
			dpsZigZag(node.Left, false, runningCount+1)
			dpsZigZag(node.Right, true, 1)
		} else {
			dpsZigZag(node.Left, false, 1)
			dpsZigZag(node.Right, true, runningCount+1)
		}
	}
	dpsZigZag(root, true, 0)
	return maxZigZag
}
