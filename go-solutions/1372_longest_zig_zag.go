package leetcode

import (
	"go-solutions/utils"
)

var maxZigZagLen int

func longestZigZag(root *utils.TreeNode) int {
	maxZigZagLen = 0
	searchZigZag(root, 0, true)
	return maxZigZagLen
}

func searchZigZag(node *utils.TreeNode, runningCount int, goLeft bool) {
	if node == nil {
		return
	}
	maxZigZagLen = max(runningCount, maxZigZagLen)
	if goLeft {
		searchZigZag(node.Left, runningCount+1, false)
		searchZigZag(node.Right, 1, true)
	} else {
		searchZigZag(node.Left, 1, false)
		searchZigZag(node.Right, runningCount+1, true)
	}
}
