package leetcode

import (
	"fmt"
	"testing"
)

type closeStringsTest struct {
	word1 string
	word2 string
	want  bool
}

var closeStringsTests = []closeStringsTest{
	{"abc", "bca", true},
	{"a", "aa", false},
	{"cabbba", "abbccc", true},
	{"abbzzca", "babzzcz", false},
	{"uau", "ssx", false},
}

func TestCloseStrings(t *testing.T) {
	for _, c := range closeStringsTests {
		t.Run(fmt.Sprintf("%v_%v_%v", c.word1, c.word2, c.want), func(t *testing.T) {
			if got := CloseStrings(c.word1, c.word2); got != c.want {
				t.Errorf("got %t, want %t", got, c.want)
			}
		})
	}
}
