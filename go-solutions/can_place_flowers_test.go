package leetcode

import "testing"

type canPlaceFlowersTest struct {
	flowerbed []int
	n         int
	expected  bool
}

var canPlaceFlowersTests = []canPlaceFlowersTest{
	{[]int{1, 0, 0, 0, 1}, 1, true},
	{[]int{1, 0, 0, 0, 1}, 2, false},
	{[]int{1, 0, 0, 0, 0, 1}, 2, false},
	{[]int{1, 0, 0, 0, 1, 0, 0}, 2, true},
}

func TestCanPlaceFlowers(t *testing.T) {
	for _, test := range canPlaceFlowersTests {
		if output := CanPlaceFlowers(test.flowerbed, test.n); output != test.expected {
			t.Errorf("Input flowerbed: %v, n: %v => Output %v not equal to expected %v", test.flowerbed, test.n, output, test.expected)
		}
	}
}

func BenchmarkCanPlaceFlowers(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range canPlaceFlowersTests {
			CanPlaceFlowers(test.flowerbed, test.n)
		}
	}
}
