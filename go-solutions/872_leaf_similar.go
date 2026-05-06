package leetcode

import (
	"go-solutions/utils"
	"reflect"
)

func leafSimilar(root1, root2 *utils.TreeNode) bool {
	oneLeaves := make([]int, 0)
	getLeaves(root1, &oneLeaves)
	twoLeaves := make([]int, 0)
	getLeaves(root2, &twoLeaves)
	return reflect.DeepEqual(oneLeaves, twoLeaves)
}

func getLeaves(node *utils.TreeNode, leaves *[]int) {
	if node == nil {
		return
	}
	if node.Left == nil && node.Right == nil {
		*leaves = append(*leaves, node.Val)
	}
	getLeaves(node.Left, leaves)
	getLeaves(node.Right, leaves)
}
