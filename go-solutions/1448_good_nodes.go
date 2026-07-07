package leetcode

import (
	"go-solutions/utils"
	"math"
)

func goodNodes(root *utils.TreeNode) int {
	count := 0
	var countNodes func(node *utils.TreeNode, maxVal int)
	countNodes = func(node *utils.TreeNode, maxVal int) {
		if node == nil {
			return
		}
		if node.Val >= maxVal {
			count++
		}
		maxVal = max(maxVal, node.Val)
		countNodes(node.Left, maxVal)
		countNodes(node.Right, maxVal)
	}
	countNodes(root, math.MinInt)
	return count
}
