package leetcode

func IsSubsequence(s, t string) bool {
	rowLen, colLen := len(s)+1, len(t)+1
	if rowLen == 1 {
		return true
	}
	dp := make([][]int, rowLen)
	for i := 0; i < rowLen; i++ {
		dp[i] = make([]int, colLen)
	}
	for col := 1; col < colLen; col++ {
		for row := 1; row < rowLen; row++ {
			if t[col-1] == s[row-1] {
				dp[row][col] = dp[row-1][col-1] + 1
			} else {
				dp[row][col] = max(dp[row-1][col], dp[row][col-1])
			}
		}
		if dp[rowLen-1][col] == rowLen-1 {
			return true
		}
	}
	return false
}
