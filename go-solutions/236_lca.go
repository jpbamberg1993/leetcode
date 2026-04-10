package leetcode

import "go-solutions/utils"

var ans *utils.TreeNode

func lowestCommonAncestor(root, p, q *utils.TreeNode) *utils.TreeNode {
	ans = nil
	scanTree(root, p, q)
	return ans
}

func scanTree(node *utils.TreeNode, p *utils.TreeNode, q *utils.TreeNode) bool {
	if node == nil {
		return false
	}
	leftFound := scanTree(node.Left, p, q)
	rightFound := scanTree(node.Right, p, q)
	mid := node == p || node == q
	count := 0
	if leftFound {
		count++
	}
	if rightFound {
		count++
	}
	if mid {
		count++
	}
	if count >= 2 {
		ans = node
	}
	return count >= 1
}
