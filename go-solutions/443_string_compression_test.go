package leetcode

import (
	"slices"
	"testing"
)

type StringCompressionTest struct {
	chars    []byte
	expected int
}

var stringCompressionTests = []StringCompressionTest{
	{chars: []byte{97, 97, 98, 98, 99, 99, 100}, expected: 7},
	{chars: []byte{97, 97, 98, 98, 99, 99, 99}, expected: 6},
	{chars: []byte{97}, expected: 1},
	{chars: []byte{97, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98}, expected: 4},
	{chars: []byte{97, 97, 97, 98, 98, 97, 97}, expected: 6},
}

func TestStringCompression(t *testing.T) {
	for _, test := range stringCompressionTests {
		// since the original slice will be modified, we want to clone this slice
		originalChars := slices.Clone(test.chars)
		if output := Compress(test.chars); output != test.expected {
			t.Errorf("Compress(%v) => %d, want %v, modified chars: %v", originalChars, output, test.expected, test.chars)
		}
	}
}
