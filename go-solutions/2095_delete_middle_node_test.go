package leetcode

import (
	"go-solutions/utils"
	"reflect"
	"testing"
)

type deleteMiddleTest struct {
	head   []int
	expect []int
}

var deleteMiddleTests = []deleteMiddleTest{
	{[]int{1, 3, 4, 7, 1, 2, 6}, []int{1, 3, 4, 1, 2, 6}},
	{[]int{1, 2, 3, 4}, []int{1, 2, 4}},
	{[]int{2, 1}, []int{2}},
	{[]int{1}, []int{}},
}

func Test_DeleteMiddle(t *testing.T) {
	for _, test := range deleteMiddleTests {
		result, isCycle := utils.ToSliceInt(deleteMiddle(utils.ToList(test.head)))
		eql := reflect.DeepEqual(result, utils.ToList(test.expect))
		if !eql || isCycle {
			t.Errorf("Input head: %v => %v not equal to %v and is cycle %v", test.head, result, test.expect, isCycle)
		}
	}
}
