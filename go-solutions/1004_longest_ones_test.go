package leetcode

import "testing"

type longestOnesTest struct {
	nums []int
	k    int
	want int
}

var longestOnesTests = []longestOnesTest{
	{nums: []int{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}, k: 2, want: 6},
	{nums: []int{0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1}, k: 3, want: 10},
}

func TestLongestOnes(t *testing.T) {
	for _, test := range longestOnesTests {
		if got := LongestOnes(test.nums, test.k); got != test.want {
			t.Errorf("got %d want %d given: nums = %v, k = %d", got, test.want, test.nums, test.k)
		}
	}
}
