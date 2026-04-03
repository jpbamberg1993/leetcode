package leetcode

import "go-solutions/utils"

var maxPathLen int

func longestZigZag(node *utils.TreeNode) int {
	maxPathLen = 0
	dps(node, true, 0)
	return maxPathLen
}

func dps(node *utils.TreeNode, goLeft bool, pathLen int) {
	if node == nil {
		return
	}
	maxPathLen = max(pathLen, maxPathLen)
	if goLeft {
		dps(node.Left, false, pathLen+1)
		dps(node.Right, true, 1)
	} else {
		dps(node.Right, true, pathLen+1)
		dps(node.Left, false, 1)
	}
}
