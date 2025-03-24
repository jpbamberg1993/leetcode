package leetcode

import (
	"testing"
)

type largestAltitudeTest struct {
	gain []int
	want int
}

var largestAltitudeTests = []largestAltitudeTest{
	{gain: []int{-5, 1, 5, 0, -7}, want: 1},
	{gain: []int{-4, -3, -2, -1, 4, 3, 2}, want: 0},
}

func TestLargestAltitude(t *testing.T) {
	for _, test := range largestAltitudeTests {
		if got := LargestAltitude(test.gain); got != test.want {
			t.Errorf("got %d, want %d, passed %v", got, test.want, test.gain)
		}
	}
}

func BenchmarkLargestAltitude(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range largestAltitudeTests {
			LargestAltitude(test.gain)
		}
	}
}
