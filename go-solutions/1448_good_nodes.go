package leetcode

import (
	"go-solutions/utils"
	"math"
)

func goodNodes(root *utils.TreeNode) int {
	var count int
	var dps func(node *utils.TreeNode, currentPathMax int)
	dps = func(node *utils.TreeNode, currentPathMax int) {
		if node == nil {
			return
		}
		if node.Val >= currentPathMax {
			count++
		}
		currentPathMax = max(currentPathMax, node.Val)
		dps(node.Left, currentPathMax)
		dps(node.Right, currentPathMax)
	}
	dps(root, math.MinInt)
	return count
}
