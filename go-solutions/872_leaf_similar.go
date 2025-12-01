package leetcode

import (
	"go-solutions/utils"
	"reflect"
)

func leafSimilar(root1, root2 *utils.TreeNode) bool {
	leaves1 := getLeaves(root1)
	leaves2 := getLeaves(root2)
	return reflect.DeepEqual(leaves1, leaves2)
}

func getLeaves(head *utils.TreeNode) []int {
	var leaves []int
	var dps func(node *utils.TreeNode)
	dps = func(node *utils.TreeNode) {
		if node == nil {
			return
		}
		if node.Left == nil && node.Right == nil {
			leaves = append(leaves, node.Val)
			return
		}
		dps(node.Left)
		dps(node.Right)
	}
	dps(head)
	return leaves
}
