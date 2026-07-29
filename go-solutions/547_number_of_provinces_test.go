package leetcode

import "testing"

func TestFindCircleNumber(t *testing.T) {
	t.Run("1 and 2 are connected", func(t *testing.T) {
		isConnected := [][]int{{1, 1, 0}, {1, 1, 0}, {0, 0, 1}}
		expect := 2
		result := findCircleNumber(isConnected)
		if result != expect {
			t.Errorf("expected %d but got %d", expect, result)
		}
	})

	t.Run("none are connected", func(t *testing.T) {
		isConnected := [][]int{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}
		expect := 3
		result := findCircleNumber(isConnected)
		if result != expect {
			t.Errorf("expected %d but got %d", expect, result)
		}
	})
}
