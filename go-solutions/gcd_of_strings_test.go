package leetcode

import "testing"

type gcdOfStringTest struct {
	arg1, arg2, expected string
}

var gcdOfStringTests = []gcdOfStringTest{
	{"ABCABC", "ABC", "ABC"},
	{"ABABAB", "ABAB", "AB"},
	{"LEET", "CODE", ""},
}

func TestGcdOfString(t *testing.T) {
	for _, test := range gcdOfStringTests {
		if output := GcdOfString(test.arg1, test.arg2); output != test.expected {
			t.Errorf("Output %q not equal to expected %q", output, test.expected)
		}
	}
}
