package leetcode

func findCircleNumber(isConnected [][]int) (provinces int) {
	n := len(isConnected)
	isSeen := make([]bool, n)
	var dps func(city int)
	dps = func(city int) {
		for neighbor, connected := range isConnected[city] {
			if connected == 1 && !isSeen[neighbor] {
				isSeen[neighbor] = true
				dps(neighbor)
			}
		}
	}
	for i := 0; i < n; i++ {
		if !isSeen[i] {
			dps(i)
			provinces++
		}
	}
	return
}
