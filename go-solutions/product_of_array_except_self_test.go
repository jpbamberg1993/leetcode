package leetcode

import (
	"reflect"
	"testing"
)

type productExceptSelfTest struct {
	nums     []int
	expected []int
}

var productExceptSelfTests = []productExceptSelfTest{
	{[]int{1, 2, 3, 4}, []int{24, 12, 8, 6}},
	{[]int{-1, 1, 0, -3, 3}, []int{0, 0, 9, 0, 0}},
}

func TestProductExceptSelf(t *testing.T) {
	for _, test := range productExceptSelfTests {
		if output := ProductExceptSelf(test.nums); !reflect.DeepEqual(output, test.expected) {
			t.Errorf("Input nums: %v => %v not equal to expected %v", test.nums, output, test.expected)
		}
	}
}
