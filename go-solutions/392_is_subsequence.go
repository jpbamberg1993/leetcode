package leetcode

func IsSubsequence(s, t string) bool {
	if len(s) > len(t) {
		return true
	}
	left := 0
	right := 0
	for left < len(s) && right < len(t) {
		if s[left] == t[right] {
			left++
		}
		right++
	}
	return left == len(s)
}
