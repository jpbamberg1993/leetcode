package leetcode

import (
	"math"
	"testing"
)

type calcEquationTest struct {
	equations [][]string
	values    []float64
	queries   [][]string
	expect    []float64
}

var calcEquationTests = []calcEquationTest{
	{
		equations: [][]string{{"a", "b"}, {"b", "c"}},
		values:    []float64{2.0, 3.0},
		queries:   [][]string{{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}},
		expect:    []float64{6.00000, 0.50000, -1.00000, 1.00000, -1.00000},
	},
	{
		equations: [][]string{{"a", "b"}, {"b", "c"}, {"bc", "cd"}},
		values:    []float64{1.5, 2.5, 5.0},
		queries:   [][]string{{"a", "c"}, {"c", "b"}, {"bc", "cd"}, {"cd", "bc"}},
		expect:    []float64{3.75000, 0.40000, 5.00000, 0.20000},
	},
	{
		equations: [][]string{{"a", "b"}},
		values:    []float64{0.5},
		queries:   [][]string{{"a", "b"}, {"b", "a"}, {"a", "c"}, {"x", "y"}},
		expect:    []float64{0.50000, 2.00000, -1.00000, -1.00000},
	},
	{
		equations: [][]string{{"x1", "x2"}, {"x2", "x3"}, {"x3", "x4"}, {"x4", "x5"}},
		values:    []float64{3.0, 4.0, 5.0, 6.0},
		queries:   [][]string{{"x1", "x5"}, {"x5", "x2"}, {"x2", "x4"}, {"x2", "x2"}, {"x2", "x9"}, {"x9", "x9"}},
		expect:    []float64{360.00000, 0.00833, 20.00000, 1.00000, -1.00000, -1.00000},
	},
	{
		equations: [][]string{{"x1", "x2"}, {"x2", "x3"}, {"x1", "x4"}, {"x2", "x5"}},
		values:    []float64{3.0, 0.5, 3.4, 5.6},
		queries:   [][]string{{"x2", "x4"}, {"x1", "x5"}, {"x1", "x3"}, {"x5", "x5"}, {"x5", "x1"}, {"x3", "x4"}, {"x4", "x3"}, {"x6", "x6"}, {"x0", "x0"}},
		expect:    []float64{1.13333, 16.80000, 1.50000, 1.00000, 0.05952, 2.26667, 0.44118, -1.00000, -1.00000},
	},
	{
		equations: [][]string{{"a", "b"}, {"c", "d"}},
		values:    []float64{1.0, 1.0},
		queries:   [][]string{{"a", "c"}, {"b", "d"}, {"b", "a"}, {"d", "c"}},
		expect:    []float64{-1, -1, 1, 1},
	},
}

// LeetCode accepts answers within 1e-5 of the expected value.
func approxEqual(got, want []float64) bool {
	if len(got) != len(want) {
		return false
	}
	for i := range got {
		if math.Abs(got[i]-want[i]) > 1e-5 {
			return false
		}
	}
	return true
}

func TestCalcEquations(t *testing.T) {
	for _, test := range calcEquationTests {
		result := calcEquation(test.equations, test.values, test.queries)
		if !approxEqual(result, test.expect) {
			t.Errorf("calcEquations: %v, %v, %v => %v but expected %v", test.equations, test.values, test.queries, result, test.expect)
		}
	}
}
