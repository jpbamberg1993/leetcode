package leetcode

import "testing"

type reverseVowelsTest struct {
	s        string
	expected string
}

var reverseVowelsTests = []reverseVowelsTest{
	{"hello", "holle"},
	{"leetcode", "leotcede"},
	{"IceCreAm", "AceCreIm"},
}

func TestReverseVowels(t *testing.T) {
	for _, test := range reverseVowelsTests {
		if output := ReverseVowels(test.s); output != test.expected {
			t.Errorf("Input s: %v => Output %q not equal to expected %q", test.s, output, test.expected)
		}
	}
}

func BenchmarkReverseVowels(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range reverseVowelsTests {
			ReverseVowels(test.s)
		}
	}
}
