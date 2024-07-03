package leetcode

import "testing"

type canMoveWaterTest struct {
	height []int
	want   int
}

var canMoveWaterTests = []canMoveWaterTest{
	{height: []int{1, 8, 6, 2, 5, 4, 8, 3, 7}, want: 49},
	{height: []int{1, 1}, want: 1},
	{height: []int{2, 3, 4, 5, 18, 17, 6}, want: 17},
}

func TestMoveWater(t *testing.T) {
	for _, test := range canMoveWaterTests {
		if got := MaxArea(test.height); got != test.want {
			t.Errorf("height: %#v want %d got %d", test.height, test.want, got)
		}
	}
}
