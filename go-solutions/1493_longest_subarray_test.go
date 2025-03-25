package leetcode

import "testing"

type longestSubarrayTest struct {
	nums []int
	want int
}

var tests = []longestSubarrayTest{
	{[]int{1, 1, 0, 1}, 3},
	{[]int{0, 1, 0, 1}, 2},
	{[]int{0, 1, 1, 1, 0, 1, 1, 0, 1}, 5},
	{[]int{1, 1, 1}, 2},
}

func TestLongestSubarray(t *testing.T) {
	for _, subarrayTest := range tests {
		if got := LongestSubarray(subarrayTest.nums); got != subarrayTest.want {
			t.Errorf("got %d, want %d, passed %v", got, subarrayTest.want, subarrayTest.nums)
		}
	}
}
