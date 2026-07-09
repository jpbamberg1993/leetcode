package leetcode

import (
	"go-solutions/utils"
	"math"
)

func maxLevelSum(root *utils.TreeNode) int {
	answer, level := 0, 0
	maxSum := math.MinInt
	queue := []*utils.TreeNode{root}
	for len(queue) > 0 {
		level++
		levelSum := 0
		for _, node := range queue {
			queue = queue[1:]
			levelSum += node.Val
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		if levelSum > maxSum {
			answer = level
			maxSum = levelSum
		}
	}
	return answer
}
