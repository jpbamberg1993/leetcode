package leetcode

import (
	"go-solutions/utils"
	"testing"
)

func TestRecentCounter(t *testing.T) {
	recentCounter := Constructor()
	times := []int{0, 1, 100, 3001, 3002}
	result := make([]int, len(times))
	for i, v := range times {
		count := recentCounter.Ping(v)
		result[i] = count
	}
	expect := []int{1, 2, 3, 3, 3}
	if !utils.SliceEqual(result, expect) {
		t.Errorf("expected %v got %v", expect, result)
	}
}
