package leetcode

import "go-solutions/utils"

func lowestCommonAncestor(root, p, q *utils.TreeNode) *utils.TreeNode {
	var result *utils.TreeNode
	var findLCA func(node *utils.TreeNode) int
	findLCA = func(node *utils.TreeNode) (found int) {
		if node == nil {
			return 0
		}
		count := 0
		count += findLCA(node.Left)
		count += findLCA(node.Right)
		if node == p || node == q {
			count += 1
		}
		if count >= 2 {
			result = node
		}
		if count >= 1 {
			found = 1
		}
		return
	}
	findLCA(root)
	return result
}
