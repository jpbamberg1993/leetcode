package leetcode

func GcdOfString(str1 string, str2 string) string {
	if str1+str2 != str2+str1 {
		return ""
	}
	gcdLen := gcd(len(str1), len(str2))
	return str1[:gcdLen]
}

func gcd(x int, y int) int {
	if y == 0 {
		return x
	} else {
		return gcd(y, x%y)
	}
}
