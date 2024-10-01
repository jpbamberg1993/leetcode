package leetcode

func RemoveStars(s string) string {
	runes := []rune(s)
	stack := Stack{}
	for _, char := range runes {
		if char == '*' {
			if stack.IsEmpty() {
				continue
			}
			stack.Pop()
		} else {
			stack.Push(char)
		}
	}
	return string(stack)
}

type Stack []rune

func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}

func (s *Stack) Push(r rune) {
	*s = append(*s, r)
}

func (s *Stack) Pop() (rune, bool) {
	if s.IsEmpty() {
		return rune(0), false
	}
	char := (*s)[len(*s)-1]
	*s = (*s)[:len(*s)-1]
	return char, true
}
