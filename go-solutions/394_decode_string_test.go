package leetcode

import "testing"

type decodeStringTest struct {
	s    string
	want string
}

var decodeStringTests = []decodeStringTest{
	{s: "3[a]2[bc]", want: "aaabcbc"},
	{s: "3[a2[c]]", want: "accaccacc"},
	{s: "2[abc]3[cd]ef", want: "abcabccdcdcdef"},
	{s: "2[20[bc]31[xy]]xd4[rt]", want: "bcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxybcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcbcxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxdrtrtrtrt"},
}

func TestDecodeString(t *testing.T) {
	for _, test := range decodeStringTests {
		if got := DecodeString(test.s); got != test.want {
			t.Errorf("got %q but wanted %q", got, test.want)
		}
	}
}
