package leetcode

import "go-solutions/utils"

func searchBST(root *utils.TreeNode, val int) *utils.TreeNode {
	if root == nil {
		return nil
	}
	if root.Val == val {
		return root
	}
	var found *utils.TreeNode
	if root.Left != nil {
		found = searchBST(root.Left, val)
		if found != nil {
			return found
		}
	}
	if root.Right != nil {
		found = searchBST(root.Right, val)
		if found != nil {
			return found
		}
	}
	return found
}
