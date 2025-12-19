package leetcode

import "go-solutions/utils"

var count int
var h map[int]int
var k int

func pathSum(root *utils.TreeNode, target int) int {
	count = 0
	h = make(map[int]int)
	k = target
	search(root, 0)
	return count
}

func search(node *utils.TreeNode, currentSum int) {
	if node == nil {
		return
	}
	currentSum += node.Val
	if currentSum == k {
		count++
	}
	if _, ok := h[currentSum-k]; ok {
		count += h[currentSum-k]
	}
	h[currentSum] += 1
	search(node.Left, currentSum)
	search(node.Right, currentSum)
	h[currentSum] -= 1
}
