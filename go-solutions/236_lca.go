package leetcode

import "go-solutions/utils"

var lca *utils.TreeNode

func lowestCommonAncestor(root, p, q *utils.TreeNode) *utils.TreeNode {
	lca = nil
	scanTree(root, p, q)
	return lca
}

func scanTree(node, p, q *utils.TreeNode) bool {
	if node == nil {
		return false
	}
	leftExist := scanTree(node.Left, p, q)
	rightExist := scanTree(node.Right, p, q)
	mid := node == p || node == q
	count := 0
	if leftExist {
		count++
	}
	if rightExist {
		count++
	}
	if mid {
		count++
	}
	if count >= 2 {
		lca = node
	}
	return count >= 1
}
