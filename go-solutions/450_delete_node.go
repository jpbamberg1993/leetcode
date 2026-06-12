package leetcode

import (
	"go-solutions/utils"
)

func deleteNode(root *utils.TreeNode, key int) *utils.TreeNode {
	if root == nil {
		return nil
	}
	if key < root.Val {
		root.Left = deleteNode(root.Left, key)
	} else if key > root.Val {
		root.Right = deleteNode(root.Right, key)
	} else {
		if root.Right != nil {
			tmp := getSuffix(root)
			root.Val = tmp.Val
			root.Right = deleteNode(root.Right, tmp.Val)
		} else if root.Left != nil {
			tmp := getPrefix(root)
			root.Val = tmp.Val
			root.Left = deleteNode(root.Left, tmp.Val)
		} else {
			return nil
		}
	}
	return root
}

func getSuffix(node *utils.TreeNode) *utils.TreeNode {
	suffix := node.Right
	for suffix.Left != nil {
		suffix = suffix.Left
	}
	return suffix
}

func getPrefix(node *utils.TreeNode) *utils.TreeNode {
	prefix := node.Left
	for prefix.Right != nil {
		prefix = prefix.Right
	}
	return prefix
}
