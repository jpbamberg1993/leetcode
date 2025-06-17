package leetcode

import "testing"

type mergeStringsAlternately struct {
	word1    string
	word2    string
	expected string
}

var mergeStringsAlternatelyTests = []mergeStringsAlternately{
	{"abc", "pqr", "apbqcr"},
	{"ab", "pqrs", "apbqrs"},
	{"abcd", "pq", "apbqcd"},
}

func TestMergeStringsAlternately(t *testing.T) {
	for _, test := range mergeStringsAlternatelyTests {
		if output := MergeAlternately(test.word1, test.word2); output != test.expected {
			t.Errorf("Output %v not equal to %v", output, test.expected)
		}
	}
}

func BenchmarkMergeAlternately(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range mergeStringsAlternatelyTests {
			MergeAlternately(test.word1, test.word2)
		}
	}
}
