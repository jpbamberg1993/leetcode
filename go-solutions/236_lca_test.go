package leetcode

import (
	"go-solutions/utils"
	"testing"
)

func Test_LCA(t *testing.T) {
	t.Run("Test root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 => 3", func(t *testing.T) {
		root := []any{3, 5, 1, 6, 2, 0, 8, nil, nil, 7, 4}
		rootNode := utils.BuildTree(root)
		pNode := utils.DPS(rootNode, 5)
		qNode := utils.DPS(rootNode, 1)
		lowestCommonNode := lowestCommonAncestor(rootNode, pNode, qNode)
		expectedNode := utils.DPS(rootNode, 3)
		if lowestCommonNode != expectedNode {
			if lowestCommonNode == nil {
				t.Errorf("expected node %d, got nil", expectedNode.Val)
			} else {
				t.Errorf("expected node %d, got node %d", expectedNode.Val, lowestCommonNode.Val)
			}
		}
	})

	t.Run("Test root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 => 5", func(t *testing.T) {
		root := []any{3, 5, 1, 6, 2, 0, 8, nil, nil, 7, 4}
		rootNode := utils.BuildTree(root)
		pNode := utils.DPS(rootNode, 5)
		qNode := utils.DPS(rootNode, 4)
		lowestCommonNode := lowestCommonAncestor(rootNode, pNode, qNode)
		expectedNode := utils.DPS(rootNode, 5)
		if lowestCommonNode != expectedNode {
			if lowestCommonNode == nil {
				t.Errorf("expected node %d, got nil", expectedNode.Val)
			} else {
				t.Errorf("expected node %d, got node %d", expectedNode.Val, lowestCommonNode.Val)
			}
		}
	})

	t.Run("Test root = [1,2], p = 1, q = 2 => 1", func(t *testing.T) {
		root := []any{1, 2}
		rootNode := utils.BuildTree(root)
		pNode := utils.DPS(rootNode, 1)
		qNode := utils.DPS(rootNode, 2)
		lowestCommonNode := lowestCommonAncestor(rootNode, pNode, qNode)
		expectedNode := utils.DPS(rootNode, 1)
		if lowestCommonNode != expectedNode {
			if lowestCommonNode == nil {
				t.Errorf("expected node %d, got nil", expectedNode.Val)
			} else {
				t.Errorf("expected node %d, got node %d", expectedNode.Val, lowestCommonNode.Val)
			}
		}
	})
}
