package leetcode

func IsSubsequence(s, t string) bool {
	if len(s) == 0 {
		return true
	}
	left := 0
	for i := 0; i < len(t); i++ {
		if s[left] == t[i] {
			left++
			if left == len(s) {
				return true
			}
		}
	}
	return left == len(s)
}
