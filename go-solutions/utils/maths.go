package utils

func Abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}

func Min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

func IsDigit(b byte) bool {
	return b >= '0' && b <= '9'
}
