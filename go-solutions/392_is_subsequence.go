package leetcode

func IsSubsequence(s, t string) bool {
	dp := make([][]int, len(t)+1)
	for i := range dp {
		dp[i] = make([]int, len(s)+1)
	}

	for i := 1; i < len(t)+1; i++ {
		for j := 1; j < len(s)+1; j++ {
			if s[j-1] == t[i-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			}
		}
	}

	return dp[len(t)][len(s)] == len(s)
}

//type Base struct {
//	tMap map[int32][]int
//}
//
//func NewBase(t string) *Base {
//	tMap := make(map[int32][]int, len(t))
//	for i, v := range t {
//		tMap[v] = append(tMap[v], i)
//	}
//	return &Base{tMap}
//}
//
//func (b *Base) IsSubsequence(s string) bool {
//	for i, v := range s {
//		if tIndexes, exists := b.tMap[v]; exists {
//			if !containsGreater(tIndexes, i) {
//				return false
//			}
//		} else {
//			return false
//		}
//	}
//	return true
//}
//
//func containsGreater(slice []int, value int) bool {
//	for _, v := range slice {
//		if v >= value {
//			return true
//		}
//	}
//	return false
//}
