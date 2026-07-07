package leetcode

import "go-solutions/utils"

func longestZigZag(root *utils.TreeNode) int {
	maxZigZag := 0
	var dps func(node *utils.TreeNode, goingRight bool, depth int)
	dps = func(node *utils.TreeNode, goingRight bool, depth int) {
		if node == nil {
			return
		}
		maxZigZag = max(maxZigZag, depth)
		if goingRight {
			dps(node.Right, false, depth+1)
			dps(node.Left, true, 1)
		} else {
			dps(node.Left, true, depth+1)
			dps(node.Right, false, 1)
		}
	}
	dps(root, true, 0)
	return maxZigZag
}
