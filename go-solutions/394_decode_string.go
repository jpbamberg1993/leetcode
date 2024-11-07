package leetcode

type item struct {
	n     int
	bytes []byte
}

func DecodeString(s string) string {
	num := 0
	st := []item{{0, []byte{}}}

	for _, ch := range s {
		switch {
		case ch == '0':
			num *= 10
		case ch > '0' && ch <= '9':
			num = num*10 + int(ch-'0')
		case ch == '[':
			st = append(st, item{num, []byte{}})
			num = 0
		case ch == ']':
			tmp := st[len(st)-1]
			st = st[:len(st)-1]
			for i := 0; i < tmp.n; i++ {
				st[len(st)-1].bytes = append(st[len(st)-1].bytes, tmp.bytes...)
			}
		default:
			st[len(st)-1].bytes = append(st[len(st)-1].bytes, byte(ch))
		}
	}
	return string(st[len(st)-1].bytes)
}
