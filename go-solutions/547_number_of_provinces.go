package leetcode

func findCircleNumber(isConnected [][]int) int {
	n := len(isConnected)
	isVisited := make([]bool, n)
	provinces := 0

	var dps func(city int)
	dps = func(city int) {
		isVisited[city] = true
		for neighbor, connected := range isConnected[city] {
			if connected == 1 && !isVisited[neighbor] {
				dps(neighbor)
			}
		}
	}

	for i := 0; i < n; i++ {
		if !isVisited[i] {
			provinces++
			dps(i)
		}
	}

	return provinces
}
