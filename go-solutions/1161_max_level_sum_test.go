package leetcode

import (
	"go-solutions/utils"
	"testing"
)

func TestMaxLevelSum(t *testing.T) {
	t.Run("root = [1,7,0,7,-8,null,null] => 2", func(t *testing.T) {
		values := []any{1, 7, 0, 7, -8, nil, nil}
		root := utils.BuildTree(values)
		expect := 2
		if result := maxLevelSum(root); result != expect {
			t.Errorf("received %d but expected %d", result, expect)
		}
	})

	t.Run("root = [989,null,10250,98693,-89388,null,null,null,-32127] => 2", func(t *testing.T) {
		values := []any{989, nil, 10250, 98693, -89388, nil, nil, nil, -32127}
		root := utils.BuildTree(values)
		expect := 2
		if result := maxLevelSum(root); result != expect {
			t.Errorf("received %d but expected %d", result, expect)
		}
	})

	t.Run("root = [-100,-200,-300,-20,-5,-10,null] => 3", func(t *testing.T) {
		values := []any{-100, -200, -300, -20, -5, -10, nil}
		root := utils.BuildTree(values)
		expect := 3
		if result := maxLevelSum(root); result != expect {
			t.Errorf("received %d but expected %d", result, expect)
		}
	})
}
