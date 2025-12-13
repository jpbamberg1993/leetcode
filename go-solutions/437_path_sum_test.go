package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type pathSumTest struct {
	root      []any
	targetSum int
	expect    int
}

var pathSumTests = []pathSumTest{
	{root: []any{10, 5, -3, 3, 2, nil, 11, 3, -2, nil, 1}, targetSum: 8, expect: 3},
	{root: []any{5, 4, 8, 11, nil, 13, 4, 7, 2, nil, nil, 5, 1}, targetSum: 22, expect: 3},
}

func TestPathSum(t *testing.T) {
	for _, test := range pathSumTests {
		root := utils.BuildTree(test.root)
		if result := pathSum(root, test.targetSum); result != test.expect {
			t.Errorf("Input root: %v, targetSum: %d => %d not equal to %d", test.root, test.targetSum, result, test.expect)
		}
	}
}
