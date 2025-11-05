package leetcode

func predictPartyVictory(senate string) string {
	dCount := 0
	rCount := 0

	for _, v := range senate {
		if v == 'D' {
			dCount++
		}
		if v == 'R' {
			rCount++
		}
	}

	ban := func(toBan int32, startAt int) bool {
		looped := false
		pointer := startAt

		for {
			if pointer == 0 {
				looped = true
			}
			if int32(senate[pointer]) == toBan {
				senate = senate[:pointer] + senate[pointer+1:]
				break
			}
			pointer = (pointer + 1) % len(senate)
		}
		return looped
	}

	turn := 0
	for dCount > 0 && rCount > 0 {
		oppParty := 'R'
		if senate[turn] == 'R' {
			oppParty = 'D'
		}
		looped := ban(oppParty, (turn+1)%len(senate))
		if oppParty == 'R' {
			rCount--
		} else {
			dCount--
		}
		if looped {
			turn--
		}
		turn = (turn + 1) % len(senate)
	}

	if dCount > 0 {
		return "Dire"
	}
	if rCount > 0 {
		return "Radiant"
	}

	return ""
}
