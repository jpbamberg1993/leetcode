package leetcode

import (
	"go-solutions/utils"
	"math"
)

func maxLevelSum(root *utils.TreeNode) int {
	answer := 1
	level := 1
	maxSum := math.MinInt
	var firstLevel []*utils.TreeNode
	var secondLevel []*utils.TreeNode
	secondLevel = append(secondLevel, root)
	for len(secondLevel) > 0 {
		firstLevel = secondLevel
		secondLevel = nil
		levelSum := 0
		for i := 0; i < len(firstLevel); i++ {
			levelSum += firstLevel[i].Val
			if firstLevel[i].Left != nil {
				secondLevel = append(secondLevel, firstLevel[i].Left)
			}
			if firstLevel[i].Right != nil {
				secondLevel = append(secondLevel, firstLevel[i].Right)
			}
		}
		if levelSum > maxSum {
			answer = level
			maxSum = levelSum
		}
		level++
	}
	return answer
}
