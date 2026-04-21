package leetcode

import "go-solutions/utils"

func goodNodes(root *utils.TreeNode) int {
	var count int
	var countNodes func(node *utils.TreeNode, maxNode int)
	countNodes = func(node *utils.TreeNode, maxNode int) {
		if node == nil {
			return
		}
		if node.Val >= maxNode {
			count++
		}
		maxNode = max(node.Val, maxNode)
		countNodes(node.Left, maxNode)
		countNodes(node.Right, maxNode)
	}
	countNodes(root, -1)
	return count
}
