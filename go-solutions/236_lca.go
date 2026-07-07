package leetcode

import (
	"go-solutions/utils"
)

func lowestCommonAncestor(root, p, q *utils.TreeNode) *utils.TreeNode {
	var result *utils.TreeNode
	var lcaSearch func(node *utils.TreeNode) (found int)
	lcaSearch = func(node *utils.TreeNode) (found int) {
		if node == nil {
			return 0
		}
		if node.Val == p.Val || node.Val == q.Val {
			found += 1
		}
		found += lcaSearch(node.Left)
		found += lcaSearch(node.Right)
		if found >= 2 {
			result = node
			found = 1
		}
		return
	}
	lcaSearch(root)
	return result
}
