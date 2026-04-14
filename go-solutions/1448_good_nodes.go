package leetcode

import "go-solutions/utils"

var nodeCount int

func goodNodes(root *utils.TreeNode) int {
	nodeCount = 0
	findNodes(root, -1)
	return nodeCount
}

func findNodes(node *utils.TreeNode, runningMax int) {
	if node == nil {
		return
	}
	if node.Val >= runningMax {
		nodeCount++
	}
	findNodes(node.Left, max(node.Val, runningMax))
	findNodes(node.Right, max(node.Val, runningMax))
}
