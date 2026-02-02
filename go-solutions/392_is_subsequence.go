package leetcode

func IsSubsequence(s, t string) bool {
	sIndex, tIndex := 0, 0

	for sIndex < len(s) && tIndex < len(t) {
		if t[tIndex] == s[sIndex] {
			sIndex++
		}
		tIndex++
	}

	return sIndex >= len(s)
}
