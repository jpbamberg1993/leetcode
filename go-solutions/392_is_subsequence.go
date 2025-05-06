package leetcode

//func IsSubsequence(s, t string) bool {
//	if len(s) > len(t) {
//		return true
//	}
//	left := 0
//	right := 0
//	for left < len(s) && right < len(t) {
//		if s[left] == t[right] {
//			left++
//		}
//		right++
//	}
//	return left == len(s)
//}

type Base struct {
	tMap map[int32][]int
}

func NewBase(t string) *Base {
	tMap := make(map[int32][]int, len(t))
	for i, v := range t {
		tMap[v] = append(tMap[v], i)
	}
	return &Base{tMap}
}

func (b *Base) IsSubsequence(s string) bool {
	for i, v := range s {
		if tIndexes, exists := b.tMap[v]; exists {
			if !containsGreater(tIndexes, i) {
				return false
			}
		} else {
			return false
		}
	}
	return true
}

func containsGreater(slice []int, value int) bool {
	for _, v := range slice {
		if v >= value {
			return true
		}
	}
	return false
}
