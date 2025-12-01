package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type leafSimilarTest struct {
	leafOne []any
	leafTwo []any
	expect  bool
}

var leafSimilarTests = []leafSimilarTest{
	{
		leafOne: []any{3, 5, 1, 6, 2, 9, 8, nil, nil, 7, 4},
		leafTwo: []any{3, 5, 1, 6, 7, 4, 2, nil, nil, nil, nil, nil, nil, 9, 8},
		expect:  true,
	},
	{
		leafOne: []any{1, 2, 3},
		leafTwo: []any{1, 3, 2},
		expect:  false,
	},
}

func Test_LeafSimilar(t *testing.T) {
	for _, test := range leafSimilarTests {
		root1 := utils.BuildTree(test.leafOne)
		root2 := utils.BuildTree(test.leafTwo)
		if result := leafSimilar(root1, root2); result != test.expect {
			t.Errorf("Input leafOne: %v, leafTwo: %v => %t not equal to %t", test.leafOne, test.leafTwo, result, test.expect)
		}
	}
}
