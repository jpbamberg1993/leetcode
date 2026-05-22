package leetcode

import (
	"go-solutions/utils"
	"math"
)

func maxLevelSum(root *utils.TreeNode) int {
	maxSum := math.MinInt
	ans, level := 0, 0

	var q []*utils.TreeNode
	q = append(q, root)
	for len(q) > 0 {
		level++
		sumAtLevel := 0
		levelSize := len(q)
		for i := 0; i < levelSize; i++ {
			node := q[0]
			q = q[1:]
			sumAtLevel += node.Val
			if node.Left != nil {
				q = append(q, node.Left)
			}
			if node.Right != nil {
				q = append(q, node.Right)
			}
		}
		if sumAtLevel > maxSum {
			ans = level
			maxSum = sumAtLevel
		}
	}
	return ans
}
