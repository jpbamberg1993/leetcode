package leetcode

import "go-solutions/utils"

var maxZigZag int

func longestZigZag(root *utils.TreeNode) int {
	maxZigZag = 0
	dps(root, true, 0)
	return maxZigZag
}

func dps(node *utils.TreeNode, goLeft bool, runningCount int) {
	if node == nil {
		return
	}
	maxZigZag = max(runningCount, maxZigZag)
	if goLeft {
		dps(node.Left, false, runningCount+1)
		dps(node.Right, true, 1)
	} else {
		dps(node.Left, false, 1)
		dps(node.Right, true, runningCount+1)
	}
}
