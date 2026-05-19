package leetcode

import (
	"go-solutions/utils"
	"reflect"
	"testing"
)

type rightSideViewTest struct {
	root   []any
	expect []int
}

var rightSideViewTests = []rightSideViewTest{
	{[]any{1, 2, 3, nil, 5, nil, 4}, []int{1, 3, 4}},
	{[]any{1, 2, 3, 4, nil, nil, nil, 5}, []int{1, 3, 4, 5}},
	{[]any{1, nil, 3}, []int{1, 3}},
	{[]any{}, []int{}},
	{[]any{1, 2, 3, 5, 6}, []int{1, 3, 6}},
}

func TestRightSideView(t *testing.T) {
	for _, test := range rightSideViewTests {
		root := utils.BuildTree(test.root)
		if result := rightSideView(root); !reflect.DeepEqual(result, test.expect) {
			t.Errorf("root: %v => %v but expected %v", test.root, result, test.expect)
		}
	}
}
