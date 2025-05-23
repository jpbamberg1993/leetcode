package leetcode

import "testing"

type increasingTripletTest struct {
	nums     []int
	expected bool
}

var increasingTripletTests = []increasingTripletTest{
	{[]int{1, 2, 3, 4, 5}, true},
	{[]int{5, 4, 3, 2, 1}, false},
	{[]int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, false},
	{[]int{2, 1, 5, 0, 4, 6}, true},
	{[]int{0, 4, 2, 1, 0, -1, -3}, false},
	{[]int{0, 4, 1, -1, 2}, true},
}

func TestIncreasingTriplet(t *testing.T) {
	for _, test := range increasingTripletTests {
		if output := IncreasingTriplet(test.nums); output != test.expected {
			t.Errorf("Input nums: %v => %v not equal to expected %v", test.nums, output, test.expected)
		}
	}
}
