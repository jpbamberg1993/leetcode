package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type deleteNodeTest struct {
	root   []any
	key    int
	expect []any
}

var deleteNodeTests = []deleteNodeTest{
	{root: []any{5, 3, 6, 2, 4, nil, 7}, key: 3, expect: []any{5, 4, 6, 2, nil, nil, 7}},
	{root: []any{5, 3, 6, 2, 4, nil, 7}, key: 0, expect: []any{5, 3, 6, 2, 4, nil, 7}},
	{root: []any{}, key: 0, expect: []any{}},
}

func TestDeleteNode(t *testing.T) {
	for _, test := range deleteNodeTests {
		root := utils.BuildTree(test.root)
		result := deleteNode(root, test.key)
		resultSlice := utils.TreeToSliceInt(result)
		expectTree := utils.BuildTree(test.expect)
		if !utils.SameTree(result, expectTree) {
			t.Errorf("expect: %v got: %v", test.expect, resultSlice)
		}
	}
}
