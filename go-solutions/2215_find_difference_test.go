package leetcode

import (
	"testing"
)

type findDifferenceTest struct {
	nums1 []int
	nums2 []int
	want  [][]int
}

var findDifferenceTestCases = []findDifferenceTest{
	{[]int{1, 2, 3}, []int{2, 4, 6}, [][]int{{1, 3}, {4, 6}}},
	{[]int{1, 2, 3, 3}, []int{1, 1, 2, 2}, [][]int{{3}, {}}},
}

func TestFindDifference(t *testing.T) {
	for _, tc := range findDifferenceTestCases {
		got := FindDifference(tc.nums1, tc.nums2)
		if !compareSliceSlice(got, tc.want) {
			t.Fatalf("FindDifference(%v, %v) => %v, want %v", tc.nums1, tc.nums2, got, tc.want)
		}
	}
}

func compareSliceSlice(a, b [][]int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if len(a[i]) != len(b[i]) {
			return false
		}
		for j := range a[i] {
			if a[i][j] != b[i][j] {
				return false
			}
		}
	}
	return true
}
