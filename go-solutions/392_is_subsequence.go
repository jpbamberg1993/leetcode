package leetcode

type Base struct {
	hm map[rune][]int
}

func NewBase(t string) *Base {
	hm := make(map[rune][]int)
	runes := []rune(t)
	for i, r := range runes {
		if value, ok := hm[r]; ok {
			hm[r] = append(value, i)
		} else {
			hm[r] = []int{i}
		}
	}
	return &Base{hm}
}

func (b *Base) IsSubsequence(s string) bool {
	sRunes := []rune(s)
	for i, r := range sRunes {
		if rightValue, exists := b.hm[r]; exists {
			if !hasValueGreaterThan(rightValue, i) {
				return false
			}
		} else {
			return false
		}
	}
	return true
}

func hasValueGreaterThan(nums []int, limit int) bool {
	for _, num := range nums {
		if num >= limit {
			return true
		}
	}
	return false
}
