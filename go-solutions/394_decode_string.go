package leetcode

func DecodeString(s string) string {
	var stack []int32
	for _, ch := range s {
		if ch == ']' {
			var decodedString []int32

			for len(stack) > 0 && stack[len(stack)-1] != '[' {
				decodedString = append(decodedString, stack[len(stack)-1])
				stack = stack[:len(stack)-1]
			}

			stack = stack[:len(stack)-1]

			var k int32
			var base int32
			base = 1
			for len(stack) > 0 && stack[len(stack)-1] <= '9' && stack[len(stack)-1] >= '0' {
				k = k + ((stack[len(stack)-1] - '0') * base)
				base *= 10
				stack = stack[:len(stack)-1]
			}

			for k > 0 {
				for i := len(decodedString) - 1; i >= 0; i-- {
					stack = append(stack, decodedString[i])
				}
				k--
			}
		} else {
			stack = append(stack, ch)
		}
	}
	return string(stack[:])
}
