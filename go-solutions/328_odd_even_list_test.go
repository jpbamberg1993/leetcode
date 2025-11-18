package leetcode

import (
	"go-solutions/utils"
	"reflect"
	"testing"
)

type oddEvenTest struct {
	head   []int
	expect []int
}

var oddEvenTests = []oddEvenTest{
	{head: []int{1, 2, 3, 4, 5}, expect: []int{1, 3, 5, 2, 4}},
	{head: []int{2, 1, 3, 5, 6, 4, 7}, expect: []int{2, 3, 6, 7, 1, 5, 4}},
}

func Test_OddEvenList(t *testing.T) {
	for _, test := range oddEvenTests {
		if result := oddEvenList(utils.ToList(test.head)); !reflect.DeepEqual(result, utils.ToList(test.expect)) {
			resultSlice, isCycle := utils.ToSliceInt(result)
			t.Errorf("Input: %v => %v not equal to %v and isCycle: %v", test.head, resultSlice, test.expect, isCycle)
		}
	}
}
