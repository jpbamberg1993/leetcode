package leetcode

import (
	"fmt"
	"testing"
)

type uniqueOccurrencesTest struct {
	arr  []int
	want bool
}

var uniqueOccurrencesTests = []uniqueOccurrencesTest{
	{[]int{1, 2, 2, 1, 1, 3}, true},
	{[]int{1, 2}, false},
	{[]int{-3, 0, 1, -3, 1, 1, 1, -3, 10, 0}, true},
}

func TestUniqueOccurrence(t *testing.T) {
	for _, test := range uniqueOccurrencesTests {
		t.Run(fmt.Sprintf("UniqueOccurrences(%v) => %v", test.arr, test.want), func(t *testing.T) {
			got := UniqueOccurrences(test.arr)
			if got != test.want {
				t.Errorf("got %v, want %v", got, test.want)
			}
		})
	}
}

func BenchmarkUniqueOccurrences(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range uniqueOccurrencesTests {
			UniqueOccurrences(test.arr)
		}
	}
}
