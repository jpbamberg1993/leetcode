package leetcode

import "testing"

func TestMinReorderTest(t *testing.T) {
	t.Run("n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]] => 3", func(t *testing.T) {
		n := 6
		connections := [][]int{{0, 1}, {1, 3}, {2, 3}, {4, 0}, {4, 5}}
		expect := 3
		if result := minReorder(n, connections); result != expect {
			t.Errorf("expected %d got %d", expect, result)
		}
	})
	t.Run("n = 5, connections = [[0,1],[1,2],[3,2],[3,4]] => 2", func(t *testing.T) {
		n := 5
		connections := [][]int{{1, 0}, {1, 2}, {3, 2}, {3, 4}}
		expect := 2
		if result := minReorder(n, connections); result != expect {
			t.Errorf("expected %d got %d", expect, result)
		}
	})
	t.Run("n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]] => 3", func(t *testing.T) {
		n := 6
		connections := [][]int{{0, 1}, {1, 3}, {2, 3}, {4, 0}, {4, 5}}
		expect := 3
		if result := minReorder(n, connections); result != expect {
			t.Errorf("expected %d got %d", expect, result)
		}
	})
}
