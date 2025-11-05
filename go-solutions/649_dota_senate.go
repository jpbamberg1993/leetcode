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

	ban := func(toBan byte, startAt int) bool {
		looped := false
		pointer := startAt

		for {
			if pointer == 0 {
				looped = true
			}
			if senate[pointer] == toBan {
				senate = senate[:pointer] + senate[pointer+1:]
				break
			}
			pointer = (pointer + 1) % len(senate)
		}
		return looped
	}

	turn := 0

	for dCount > 0 && rCount > 0 {
		if senate[turn] == 'R' {
			bannedSenatorBefore := ban('D', (turn+1)%len(senate))
			dCount--
			if bannedSenatorBefore {
				turn--
			}
		} else {
			bannedSenatorBefore := ban('R', (turn+1)%len(senate))
			rCount--
			if bannedSenatorBefore {
				turn--
			}
		}
		turn = (turn + 1) % len(senate)
	}

	if dCount == 0 {
		return "Radiant"
	} else {
		return "Dire"
	}
}
