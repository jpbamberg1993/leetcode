package leetcode

import "testing"
import "go-solutions/utils"

type kidsWithCandiesTest struct {
	candies      []int
	extraCandies int
	expected     []bool
}

var kidsWithCandiesTests = []kidsWithCandiesTest{
	{[]int{2, 3, 5, 1, 3}, 3, []bool{true, true, true, false, true}},
	{[]int{4, 2, 1, 1, 2}, 1, []bool{true, false, false, false, false}},
	{[]int{12, 1, 12}, 10, []bool{true, false, true}},
	{[]int{2, 8, 7}, 1, []bool{false, true, true}},
}

func TestKidsWithCandies(t *testing.T) {
	for _, test := range kidsWithCandiesTests {
		if output := KidsWithCandies(test.candies, test.extraCandies); !utils.BoolSliceEqual(output, test.expected) {
			t.Errorf("Passed candies: %#v, extraCandies: %#v => %v not equal to expected %v", test.candies, test.extraCandies, output, test.expected)
		}
	}
}

func BenchmarkKidsWithCandies(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range kidsWithCandiesTests {
			KidsWithCandies(test.candies, test.extraCandies)
		}
	}
}
