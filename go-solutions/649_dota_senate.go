package leetcode

func predictPartyVictory(senate string) (party string) {
	n := len(senate)

	var rQueue []int
	var dQueue []int
	for i := 0; i < len(senate); i++ {
		party := senate[i]
		if party == 'D' {
			dQueue = append(dQueue, i)
		}
		if party == 'R' {
			rQueue = append(rQueue, i)
		}
	}
	for len(rQueue) != 0 && len(dQueue) != 0 {
		if rQueue[0] < dQueue[0] {
			dQueue = dQueue[1:]
			tmp := rQueue[0] + n - 1
			rQueue = rQueue[1:]
			rQueue = append(rQueue, tmp)
		} else {
			rQueue = rQueue[1:]
			tmp := dQueue[0] + n - 1
			dQueue = dQueue[1:]
			dQueue = append(dQueue, tmp)
		}
	}

	if len(rQueue) == 0 {
		return "Dire"
	}
	return "Radiant"
}
