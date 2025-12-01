package leetcode

import (
	"go-solutions/utils"
	"testing"
)

func TestGoodNode(t *testing.T) {
	t.Run("example1", func(t *testing.T) {
		values := utils.BuildTree([]any{3, 1, 4, 3, nil, 1, 5})
		expect := 4
		result := goodNodes(values)
		if result != expect {
			t.Errorf("example1: expected %d but received %d", expect, result)
		}
	})

	t.Run("example2", func(t *testing.T) {
		values := utils.BuildTree([]any{3, 3, nil, 4, 2})
		expect := 3
		result := goodNodes(values)
		if result != expect {
			t.Errorf("example2: expected %d but received %d", expect, result)
		}
	})

	t.Run("starting below zero", func(t *testing.T) {
		values := utils.BuildTree([]any{-1, 5, -2, 4, 4, 2, -2, nil, nil, -4, nil, -2, 3, nil, -2, 0, nil, -1, nil, -3, nil, -4, -3, 3, nil, nil, nil, nil, nil, nil, nil, 3, -3})
		expect := 5
		result := goodNodes(values)
		if result != expect {
			t.Errorf("example below zero: expected %d but received %d", expect, result)
		}
	})
}
