package leetcode

import "testing"

type IsSubsequenceTest struct {
	t       string
	sToTest []SToTest
}

type SToTest struct {
	s        string
	expected bool
}

//func TestIsSubsequence(t *testing.T) {
//	for _, test := range isSubsequenceTests {
//		got := IsSubsequence(test.s, test.t)
//		if got != test.expected {
//			t.Errorf("passed %s and %s returned %t expected %t", test.s, test.t, got, test.expected)
//		}
//	}
//}

func TestBaseOne(t *testing.T) {
	base := NewBase("ahbgdc")
	tests := []SToTest{
		{s: "abc", expected: true},
		{s: "axc", expected: false},
	}
	for _, test := range tests {
		if result := base.IsSubsequence(test.s); result != test.expected {
			t.Errorf("passed %v want %v got %v", test.s, test.expected, result)
		}
	}
}

func BenchmarkIsSubsequence(b *testing.B) {
	base := NewBase("ahbgdc")
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		base.IsSubsequence("abc")
		base.IsSubsequence("axc")
	}
}
