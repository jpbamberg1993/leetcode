package leetcode

import "go-solutions/utils"

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
			suffix := getSuffix(root)
			root.Val = suffix.Val
			root.Right = deleteNode(root.Right, suffix.Val)
		} else if root.Left != nil {
			prefix := getPrefix(root)
			root.Val = prefix.Val
			root.Left = deleteNode(root.Left, prefix.Val)
		} else {
			return nil
		}
	}
	return root
}

func getSuffix(node *utils.TreeNode) *utils.TreeNode {
	suffix := node.Right
	for suffix.Right != nil {
		suffix = suffix.Right
	}
	return suffix
}

func getPrefix(node *utils.TreeNode) *utils.TreeNode {
	prefix := node.Left
	for prefix.Left != nil {
		prefix = prefix.Left
	}
	return prefix
}
