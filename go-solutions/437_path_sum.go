package leetcode

import "go-solutions/utils"

var (
	count int
	k     int
	hMap  map[int]int
)

func pathSum(root *utils.TreeNode, targetSum int) int {
	count = 0
	k = targetSum
	hMap = make(map[int]int)
	dpsPathSum(root, 0)
	return count
}

func dpsPathSum(node *utils.TreeNode, runningSum int) {
	if node == nil {
		return
	}
	runningSum += node.Val
	if runningSum == k {
		count++
	}
	if _, ok := hMap[runningSum-k]; ok {
		count += hMap[runningSum-k]
	}
	hMap[runningSum] += 1
	dpsPathSum(node.Left, runningSum)
	dpsPathSum(node.Right, runningSum)
	hMap[runningSum] -= 1
}
