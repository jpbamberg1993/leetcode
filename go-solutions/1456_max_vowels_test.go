package leetcode

import "testing"

type maxVowels struct {
	s    string
	k    int
	want int
}

var maxVowelsTests = []maxVowels{
	{"abciiidef", 3, 3},
	{"aeiou", 2, 2},
	{"leetcode", 3, 2},
}

func TestMaxVowels(t *testing.T) {
	for _, test := range maxVowelsTests {
		if got := MaxVowels(test.s, test.k); got != test.want {
			t.Errorf("got %d want %d given: s = %q, k = %d", got, test.want, test.s, test.k)
		}
	}
}
