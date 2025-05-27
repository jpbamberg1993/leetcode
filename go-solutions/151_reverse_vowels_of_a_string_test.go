package leetcode

import "testing"

type reverseVowelsTest struct {
	s        string
	expected string
}

var reverseVowelsTests = []reverseVowelsTest{
	{"hello", "holle"},
	{"leetcode", "leotcede"},
}

func TestReverseVowels(t *testing.T) {
	for _, test := range reverseVowelsTests {
		if output := ReverseVowels(test.s); output != test.expected {
			t.Errorf("Input s: %v => Output %v not equal to expected %v", test.s, output, test.expected)
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
