package leetcode

import (
	"container/list"
	"strings"
)

const (
	radiant = "Radiant"
	dire    = "Dire"
)

func predictPartyVictory(senate string) string {
	senators := list.New()
	for i := len(senate) - 1; i >= 0; i-- {
		senators.PushFront(senate[i])
	}

	for i := 0; i < senators.Len(); i++ {
		votingSenator := senate[i]
		for s := senators.Front(); s != nil; s = s.Next() {
			oppParty := 'R'
			if votingSenator == 'R' {
				oppParty = 'D'
			}
			if s.Value == uint8(oppParty) {
				senators.Remove(s)
				break
			}
		}
	}

	rAnswer := strings.Repeat("R", senators.Len())
	dAnswer := strings.Repeat("D", senators.Len())
	senatorsStr := listToString(senators)
	if senatorsStr == rAnswer {
		return radiant
	}
	if senatorsStr == dAnswer {
		return dire
	}
	return ""
}

func listToString(l *list.List) string {
	b := strings.Builder{}
	for i := l.Front(); i != nil; i = i.Next() {
		b.WriteByte(i.Value.(uint8))
	}
	return b.String()
}
