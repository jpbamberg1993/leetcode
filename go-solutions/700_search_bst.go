package leetcode

import "go-solutions/utils"

func searchBST(root *utils.TreeNode, val int) *utils.TreeNode {
	if root == nil || root.Val == val {
		return root
	}
	if val < root.Val {
		return searchBST(root.Left, val)
	}
	return searchBST(root.Right, val)
}
