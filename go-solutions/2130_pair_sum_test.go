package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type pairSumTest struct {
	head   []int
	expect int
}

var pairSumTests = []pairSumTest{
	{head: []int{5, 4, 2, 1}, expect: 6},
	{head: []int{4, 2, 2, 3}, expect: 7},
	{head: []int{1, 100000}, expect: 100001},
}

func Test_PairSum(t *testing.T) {
	for _, test := range pairSumTests {
		if result := pairSum(utils.ToList(test.head)); result != test.expect {
			t.Errorf("%v => %d is not equal to %d", test.head, result, test.expect)
		}
	}
}
