package leetcode

import (
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
		result := deleteMiddle(toList(test.head))
		eql := reflect.DeepEqual(result, toList(test.expect))
		if !eql {
			t.Errorf("Input head: %v => %v not equal to %v", test.head, toSliceInt(result), test.expect)
		}
	}
}
