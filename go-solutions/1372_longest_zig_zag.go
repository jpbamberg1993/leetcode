package leetcode

import "go-solutions/utils"

var maxLength int

func longestZigZag(input *utils.TreeNode) int {
	maxLength = 0
	dps(input, true, 0)
	return maxLength
}

func dps(node *utils.TreeNode, goingLeft bool, runningLen int) {
	if node == nil {
		return
	}
	maxLength = max(maxLength, runningLen)
	if goingLeft {
		dps(node.Left, false, runningLen+1)
		dps(node.Right, true, 1)
	} else {
		dps(node.Right, true, runningLen+1)
		dps(node.Left, false, 1)
	}
}
