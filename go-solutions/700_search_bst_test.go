package leetcode

import (
	"go-solutions/utils"
	"reflect"
	"testing"
)

type searchBSTTest struct {
	root   []any
	val    int
	expect []any
}

var searchBSTTests = []searchBSTTest{
	{root: []any{4, 2, 7, 1, 3}, val: 2, expect: []any{2, 1, 3}},
	{root: []any{4, 2, 7, 1, 3}, val: 5, expect: []any{}},
}

func TestSearchBST(t *testing.T) {
	for _, test := range searchBSTTests {
		root := utils.BuildTree(test.root)
		expect := utils.BuildTree(test.expect)
		result := searchBST(root, test.val)
		if !reflect.DeepEqual(expect, result) {
			resultSlice := utils.TreeToSliceInt(result)
			t.Errorf("expected: %v received: %v", test.expect, resultSlice)
		}
	}
}
