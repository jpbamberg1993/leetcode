package leetcode

import (
	"go-solutions/utils"
	"math"
)

func maxLevelSum(root *utils.TreeNode) int {
	var firstLevel []*utils.TreeNode
	var secondLevel []*utils.TreeNode
	secondLevel = append(secondLevel, root)
	result := 0
	maxSum := math.MinInt
	currentLevel := 1
	for len(secondLevel) > 0 {
		firstLevel = secondLevel
		secondLevel = nil
		sum := 0
		for len(firstLevel) > 0 {
			node := firstLevel[0]
			firstLevel = firstLevel[1:]
			sum += node.Val
			if node.Left != nil {
				secondLevel = append(secondLevel, node.Left)
			}
			if node.Right != nil {
				secondLevel = append(secondLevel, node.Right)
			}
		}
		if sum > maxSum {
			result = currentLevel
			maxSum = sum
		}
		currentLevel++
	}
	return result
}
