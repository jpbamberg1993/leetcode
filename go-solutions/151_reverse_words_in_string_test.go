package leetcode

import "testing"

type reverseWordsInStringTest struct {
	s        string
	expected string
}

var reverseWordsInStringTests = []reverseWordsInStringTest{
	{"the sky is blue", "blue is sky the"},
	{"  hello world  ", "world hello"},
	{"a good   example", "example good a"},
}

func TestReverseWordsInString(t *testing.T) {
	for _, test := range reverseWordsInStringTests {
		if output := ReverseWordsInString(test.s); output != test.expected {
			t.Errorf("Input s: %q => Output %q not equal to expected %q", test.s, output, test.expected)
		}
	}
}

func BenchmarkReverseWordsInString(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range reverseWordsInStringTests {
			ReverseWordsInString(test.s)
		}
	}
}
