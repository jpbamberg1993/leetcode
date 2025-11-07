package leetcode

func predictPartyVictory(senate string) string {
	var rQueue []int
	var dQueue []int

	for i, s := range senate {
		if s == 'R' {
			rQueue = append(rQueue, i)
		} else {
			dQueue = append(dQueue, i)
		}
	}

	for len(rQueue) > 0 && len(dQueue) > 0 {
		rFirst := rQueue[0]
		dFirst := dQueue[0]
		if rFirst < dFirst {
			dQueue = dQueue[1:]
			rQueue = rQueue[1:]
			rQueue = append(rQueue, rFirst+len(senate))
		} else {
			dQueue = dQueue[1:]
			rQueue = rQueue[1:]
			dQueue = append(dQueue, dFirst+len(senate))
		}
	}

	if len(rQueue) == 0 {
		return "Dire"
	} else {
		return "Radiant"
	}
}
