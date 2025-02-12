package leetcode

import "testing"

type equalPairsTest struct {
	grid [][]int
	want int
}

var equalPairsTests = []equalPairsTest{
	{[][]int{{3, 2, 1}, {1, 7, 6}, {2, 7, 7}}, 1},
	{[][]int{{3, 1, 2, 2}, {1, 4, 4, 5}, {2, 4, 2, 2}, {2, 4, 2, 2}}, 3},
	{[][]int{{11, 1}, {1, 11}}, 2},
}

func TestEqualPairs(t *testing.T) {
	for _, tc := range equalPairsTests {
		if got := EqualPairs(tc.grid); got != tc.want {
			t.Errorf("EqualPairs(%v) got %d, want %d", tc.grid, got, tc.want)
		}
	}
}

func BenchmarkEqualPairs(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, tc := range equalPairsTests {
			EqualPairs(tc.grid)
		}
	}
}
