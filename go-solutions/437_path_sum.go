package leetcode

import "go-solutions/utils"

func pathSum(root *utils.TreeNode, targetSum int) int {
	pathCount := 0
	sumMap := make(map[int]int)
	var countPaths func(node *utils.TreeNode, currentSum int)
	countPaths = func(node *utils.TreeNode, runningSum int) {
		if node == nil {
			return
		}
		runningSum += node.Val
		if runningSum == targetSum {
			pathCount++
		}
		if _, ok := sumMap[runningSum-targetSum]; ok {
			pathCount += sumMap[runningSum-targetSum]
		}
		sumMap[runningSum] += 1
		countPaths(node.Left, runningSum)
		countPaths(node.Right, runningSum)
		sumMap[runningSum] -= 1
	}
	countPaths(root, 0)
	return pathCount
}
