package leetcode

import (
	"slices"
	"testing"
)

type MoveZeroesTypes struct {
	nums     []int
	expected []int
}

var moveZeroesTests = []MoveZeroesTypes{
	{[]int{0, 1, 0, 3, 12}, []int{1, 3, 12, 0, 0}},
	{[]int{0, 0, 0, 0, 0}, []int{0, 0, 0, 0, 0}},
	{[]int{0}, []int{0}},
}

func TestMoveZeroes(t *testing.T) {
	for _, test := range moveZeroesTests {
		MoveZeroes(test.nums)
		if !slices.Equal(test.nums, test.expected) {
			t.Errorf("expected %v got %v", test.expected, test.nums)
		}
	}
}
