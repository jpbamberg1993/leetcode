package leetcode

func GcdOfStrings(str1, str2 string) string {
	if str1+str2 != str2+str1 {
		return ""
	}
	gcdLength := gcd(len(str1), len(str2))
	return str1[:gcdLength]
}

func gcd(x, y int) int {
	if y == 0 {
		return x
	} else {
		return gcd(y, x%y)
	}
}
