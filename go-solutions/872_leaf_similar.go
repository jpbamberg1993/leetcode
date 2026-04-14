package leetcode

import "go-solutions/utils"

func leafSimilar(root1, root2 *utils.TreeNode) bool {
	leaves1 := getLeaves(root1, []int{})
	leaves2 := getLeaves(root2, []int{})
	return utils.SliceEqual(leaves1, leaves2)
}

func getLeaves(node *utils.TreeNode, leaves []int) []int {
	if node == nil {
		return leaves
	}
	if node.Left == nil && node.Right == nil {
		leaves = append(leaves, node.Val)
		return leaves
	}
	leaves = getLeaves(node.Left, leaves)
	leaves = getLeaves(node.Right, leaves)
	return leaves
}
