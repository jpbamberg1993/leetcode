package leetcode

import "testing"

type removeStarsTest struct {
	s    string
	want string
}

var removeStarsTests = []removeStarsTest{
	{"leet**cod*e", "lecoe"},
	{"erase*****", ""},
}

func TestRemoveStars(t *testing.T) {
	for _, test := range removeStarsTests {
		if got := RemoveStars(test.s); got != test.want {
			t.Errorf("RemoveStars(%q) = %q, want %q", test.s, got, test.want)
		}
	}
}

func BenchmarkRemoveStars(b *testing.B) {
	for i := 0; i < b.N; i++ {
		RemoveStars("leet**cod*e")
	}
}
