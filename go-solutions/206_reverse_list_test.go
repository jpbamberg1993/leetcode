package leetcode

import (
	"go-solutions/utils"
	"reflect"
	"testing"
)

type reverseListTest struct {
	head   []int
	expect []int
}

var reverseListTests = []reverseListTest{
	{head: []int{1, 2, 3, 4, 5}, expect: []int{5, 4, 3, 2, 1}},
	{head: []int{1, 2}, expect: []int{2, 1}},
}

func TestReverseList(t *testing.T) {
	for _, test := range reverseListTests {
		if result := reverseList(utils.ToList(test.head)); !reflect.DeepEqual(result, utils.ToList(test.expect)) {
			resultInts, isCycle := utils.ToSliceInt(result)
			t.Errorf("Input: %v => %v not equal to %v and is cycle: %v", test.head, resultInts, test.expect, isCycle)
		}
	}
}
