package leetcode

func DecodeString(s string) string {
	var st []int32
	for _, c := range s {
		if c == ']' {
			var decodedString []int32

			for st[len(st)-1] != '[' {
				decodedString = append(decodedString, st[len(st)-1])
				st = st[:len(st)-1]
			}

			st = st[:len(st)-1]

			base := 1
			var n int
			for len(st) > 0 && st[len(st)-1] >= '0' && st[len(st)-1] <= '9' {
				n = n + int(st[len(st)-1]-'0')*base
				st = st[:len(st)-1]
				base *= 10
			}

			for n > 0 {
				for i := len(decodedString) - 1; i >= 0; i-- {
					st = append(st, decodedString[i])
				}
				n--
			}
		} else {
			st = append(st, c)
		}
	}
	return string(st)
}
