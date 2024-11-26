package leetcode

func DecodeString(s string) string {
	st := []item{{0, []byte{}}}
	num := 0

	for _, c := range s {
		switch {
		case c > '0' && c <= '9':
			num = num*10 + int(c-'0')
		case c == '0':
			num *= 10
		case c == '[':
			st = append(st, item{num, []byte{}})
			num = 0
		case c == ']':
			tmp := st[len(st)-1]
			st = st[:len(st)-1]
			for i := 0; i < tmp.num; i++ {
				st[len(st)-1].bytes = append(st[len(st)-1].bytes, tmp.bytes...)
			}
		default:
			st[len(st)-1].bytes = append(st[len(st)-1].bytes, byte(c))
		}
	}
	return string(st[len(st)-1].bytes)
}

type item struct {
	num   int
	bytes []byte
}
