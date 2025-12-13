package leetcode

import (
	"go-solutions/utils"
)

var count int
var k int
var h map[int]int

func pathSum(root *utils.TreeNode, sum int) int {
	count = 0
	k = sum
	h = map[int]int{}
	preorder(root, 0)
	return count
}

func preorder(node *utils.TreeNode, currSum int) {
	if node == nil {
		return
	}

	currSum += node.Val

	if currSum == k {
		count++
	}

	if _, ok := h[currSum-k]; ok {
		count += h[currSum-k]
	}

	h[currSum] += 1

	preorder(node.Left, currSum)
	preorder(node.Right, currSum)

	h[currSum] -= 1
}
