package leetcode

func DecodeString(s string) string {
	var st []int32

	for _, v := range s {
		if v == ']' {
			// slice of characters in between [ and ]
			var subSlice []int32
			for st[len(st)-1] != '[' {
				subSlice = append(subSlice, st[len(st)-1])
				st = st[:len(st)-1]
			}
			st = st[:len(st)-1]

			// the number of times subSlice is repeated
			base := 1
			k := 0
			for len(st) > 0 && st[len(st)-1] >= '0' && st[len(st)-1] <= '9' {
				k = k + int(st[len(st)-1]-'0')*base
				base *= 10
				st = st[:len(st)-1]
			}

			for k > 0 {
				for i := len(subSlice) - 1; i >= 0; i-- {
					st = append(st, subSlice[i])
				}
				k--
			}
		} else {
			st = append(st, v)
		}
	}
	return string(st[:])
}
