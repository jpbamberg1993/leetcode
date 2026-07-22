package leetcode

func canVisitAllRooms(rooms [][]int) bool {
	seen := make([]bool, len(rooms))
	seen[0] = true
	toSee := []int{0}
	for len(toSee) > 0 {
		room := toSee[0]
		toSee = toSee[1:]
		node := rooms[room]
		for _, v := range node {
			if !seen[v] {
				seen[v] = true
				toSee = append(toSee, v)
			}
		}
	}
	for _, v := range seen {
		if !v {
			return false
		}
	}
	return true
}
