package leetcode

func GcdOfString(str1 string, str2 string) string {
	if str1+str2 != str2+str1 {
		return ""
	}

	return str1[:gcb(len(str1), len(str2))]
}

func gcb(a, b int) int {
	if b == 0 {
		return a
	}

}
