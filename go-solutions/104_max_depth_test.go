package leetcode

import (
	"go-solutions/utils"
	"testing"
)

func TestMaxDepth_Example1(t *testing.T) {
	t.Run("example1", func(t *testing.T) {
		values := []any{3, 9, 20, nil, nil, 15, 7}
		tree := utils.BuildTree(values)
		expect := 3
		if result := maxDepth(tree); result != expect {
			t.Errorf("received %d but expected %d", result, expect)
		}
	})

	t.Run("example2", func(t *testing.T) {
		values := []any{1, nil, 2}
		tree := utils.BuildTree(values)
		expect := 2
		if result := maxDepth(tree); result != expect {
			t.Errorf("received %d but expected %d", result, expect)
		}
	})
}
