package leetcode

import "testing"

type pivotIndexTest struct {
	nums []int
	want int
}

var pivotIndexTests = []pivotIndexTest{
	{nums: []int{1, 7, 3, 6, 5, 6}, want: 3},
	{nums: []int{1, 2, 3}, want: -1},
	{nums: []int{2, 1, -1}, want: 0},
	{nums: []int{-1, -1, 0, 1, 1, 0}, want: 5},
}

func TestPivotIndex(t *testing.T) {
	for _, test := range pivotIndexTests {
		if got := PivotIndex(test.nums); got != test.want {
			t.Errorf("got %d, want %d, passed %v", got, test.want, test.nums)
		}
	}
}
