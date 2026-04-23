package leetcode

import "go-solutions/utils"

var (
	count int
	k     int
	h     map[int]int
)

func pathSum(root *utils.TreeNode, target int) int {
	count = 0
	k = target
	h = make(map[int]int)
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
	if _, ok := h[runningSum-k]; ok {
		count += h[runningSum-k]
	}
	h[runningSum] += 1
	dpsPathSum(node.Left, runningSum)
	dpsPathSum(node.Right, runningSum)
	h[runningSum] -= 1
}
