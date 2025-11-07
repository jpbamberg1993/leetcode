package leetcode

import "container/list"

func predictPartyVictory(senate string) string {

	n := len(senate)

	rQueue := list.New()
	dQueue := list.New()

	for i := 0; i < n; i++ {
		if senate[i] == 'R' {
			rQueue.PushBack(i)
		} else {
			dQueue.PushBack(i)
		}
	}

	for rQueue.Len() > 0 && dQueue.Len() > 0 {
		rFront := rQueue.Front()
		rQueue.Remove(rFront)
		dFront := dQueue.Front()
		dQueue.Remove(dFront)

		if rFront.Value.(int) < dFront.Value.(int) {
			rQueue.PushBack(rFront.Value.(int) + n)
		} else {
			dQueue.PushBack(dFront.Value.(int) + n)
		}
	}

	if rQueue.Len() > 0 {
		return "Radiant"
	} else {
		return "Dire"
	}
}
