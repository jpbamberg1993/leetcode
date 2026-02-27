package utils

type Stack []int

func (s *Stack) Push(v int) {
	*s = append(*s, v)
}

func (s *Stack) Pop() (int, bool) {
	if len(*s) == 0 {
		return 0, false
	}
	idx := len(*s) - 1
	v := (*s)[idx]
	*s = (*s)[:idx]
	return v, true
}
