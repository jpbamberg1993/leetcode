package leetcode

import (
	"testing"
)

func TestCanVisitAllRooms(t *testing.T) {
	t.Run("rooms = [[1],[2],[3],[]] => true", func(t *testing.T) {
		rooms := [][]int{{1}, {2}, {3}, {}}
		expect := true
		if result := canVisitAllRooms(rooms); result != expect {
			t.Errorf("rooms = [[1],[2],[3],[]] => %t, expected %t", result, expect)
		}
	})

	t.Run("rooms = [[1,3],[3,0,1],[2],[0]] => false", func(t *testing.T) {
		rooms := [][]int{{1, 3}, {3, 0, 1}, {2}, {0}}
		expect := false
		if result := canVisitAllRooms(rooms); result != expect {
			t.Errorf("rooms = [[1,3],[3,0,1],[2],[0]] => %t, expected %t", result, expect)
		}
	})
}
