package leetcode

import (
	"go-solutions/utils"
	"reflect"
)

func leafSimilar(root1, root2 *utils.TreeNode) bool {
	var leaves1 []int
	var leaves2 []int
	getLeaves(root1, &leaves1)
	getLeaves(root2, &leaves2)
	return reflect.DeepEqual(leaves1, leaves2)
}

func getLeaves(node *utils.TreeNode, leaves *[]int) {
	if node != nil {
		if node.Left == nil && node.Right == nil {
			*leaves = append(*leaves, node.Val)
		}
		getLeaves(node.Left, leaves)
		getLeaves(node.Right, leaves)
	}
}
