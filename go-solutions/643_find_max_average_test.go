package leetcode

import "testing"

type findMaxAverageTest struct {
	nums []int
	k    int
	want float64
}

var findMaxAverageTests = []findMaxAverageTest{
	{nums: []int{1, 12, -5, -6, 50, 3}, k: 4, want: 12.7500},
	{nums: []int{5}, k: 1, want: 5.00000},
	{nums: []int{0, 4, 0, 3, 2}, k: 1, want: 4.00000},
}

func TestFindMaxAverage(t *testing.T) {
	for _, test := range findMaxAverageTests {
		if got := FindMaxAverage(test.nums, test.k); got != test.want {
			t.Errorf("got %f want %f given: nums = %#v, k = %d", got, test.want, test.nums, test.k)
		}
	}
}
