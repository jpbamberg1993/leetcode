package leetcode

import "testing"

type IsSubsequenceTest struct {
	s        string
	t        string
	expected bool
}

var isSubsequenceTests = []IsSubsequenceTest{
	{s: "abc", t: "ahbgdc", expected: true},
	{s: "axc", t: "ahbgdc", expected: false},
}

func TestIsSubsequence(t *testing.T) {
	for _, test := range isSubsequenceTests {
		got := IsSubsequence(test.s, test.t)
		if got != test.expected {
			t.Errorf("passed %s and %s returned %t expected %t", test.s, test.t, got, test.expected)
		}
	}
}
