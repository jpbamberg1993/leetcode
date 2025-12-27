package leetcode

import "go-solutions/utils"

var maxPathLen int

func longestZigZag(root *utils.TreeNode) int {
	maxPathLen = 0
	dfs(root, true, 0)
	return maxPathLen
}

func dfs(node *utils.TreeNode, goLeft bool, pathLen int) {
	if node == nil {
		return
	}
	maxPathLen = max(maxPathLen, pathLen)
	if goLeft {
		dfs(node.Left, false, pathLen+1)
		dfs(node.Right, true, 1)
	} else {
		dfs(node.Left, false, 1)
		dfs(node.Right, true, pathLen+1)
	}
}
