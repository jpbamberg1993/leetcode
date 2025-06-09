package leetcode

import "testing"

type gcdOfStringTest struct {
	arg1, arg2, expected string
}

var gcdOfStringTests = []gcdOfStringTest{
	{"ABCABC", "ABC", "ABC"},
	{"ABAB", "ABABAB", "AB"},
	{"LEET", "CODE", ""},
	{"ABC", "ABC", "ABC"},
}

func TestGcdOfString(t *testing.T) {
	for _, test := range gcdOfStringTests {
		if output := GcdOfString(test.arg1, test.arg2); output != test.expected {
			t.Errorf("Output %q not equal to expected %q", output, test.expected)
		}
	}
}

func BenchmarkGcdOfString(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range gcdOfStringTests {
			GcdOfString(test.arg1, test.arg2)
		}
	}
}
