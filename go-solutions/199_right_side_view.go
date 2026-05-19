package leetcode

import "go-solutions/utils"

func rightSideView(root *utils.TreeNode) []int {
	if root == nil {
		return []int{}
	}

	var result []int
	var firstLevel []*utils.TreeNode
	var secondLevel []*utils.TreeNode
	secondLevel = append(secondLevel, root)
	for len(secondLevel) > 0 {
		firstLevel = secondLevel
		secondLevel = nil
		for len(firstLevel) > 0 {
			node := firstLevel[0]
			firstLevel = firstLevel[1:]
			if len(firstLevel) == 0 {
				result = append(result, node.Val)
			}
			if node.Left != nil {
				secondLevel = append(secondLevel, node.Left)
			}
			if node.Right != nil {
				secondLevel = append(secondLevel, node.Right)
			}
		}
	}
	return result
}
