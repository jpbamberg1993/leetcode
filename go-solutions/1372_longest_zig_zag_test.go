package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type longestZigZagTest struct {
	input  []any
	expect int
}

var longestZigZagTests = []longestZigZagTest{
	{input: []any{1, nil, 1, 1, 1, nil, nil, 1, 1, nil, 1, nil, nil, nil, 1}, expect: 3},
	{input: []any{1}, expect: 0},
}

func TestLongestZigZag(t *testing.T) {
	for _, test := range longestZigZagTests {
		input := utils.BuildTree(test.input)
		if result := longestZigZag(input); result != test.expect {
			t.Errorf("input: %v => %d but expected %d", test.input, result, test.expect)
		}
	}
}
