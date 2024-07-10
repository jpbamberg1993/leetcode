package leetcode

import "testing"

type maxOperationsTest struct {
	nums []int
	k    int
	want int
}

var maxOperationsTests = []maxOperationsTest{
	{nums: []int{1, 2, 3, 4}, k: 5, want: 2},
	{nums: []int{3, 1, 3, 4, 3}, k: 6, want: 1},
	{nums: []int{3, 5, 1, 5}, k: 2, want: 0},
}

func TestMaxOperations(t *testing.T) {
	for _, test := range maxOperationsTests {
		if got := MaxOperations(test.nums, test.k); got != test.want {
			t.Errorf("got %d want %d given: nums = %#v, k = %d", got, test.want, test.nums, test.k)
		}
	}
}
