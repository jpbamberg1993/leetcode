package leetcode

import (
	"reflect"
	"testing"
)

type calcEquationTest struct {
	equations [][]string
	values    []float64
	queries   [][]string
	expect    []float64
}

var calcEquationTests = []calcEquationTest{
	{equations: [][]string{{"a", "b"}, {"b", "c"}}, values: []float64{2.0, 3.0}, queries: [][]string{{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}}, expect: []float64{6.00000, 0.50000, -1.00000, 1.00000, -1.00000}},
	{equations: [][]string{{"a", "b"}, {"b", "c"}, {"bc", "cd"}}, values: []float64{1.5, 2.5, 5.0}, queries: [][]string{{"a", "c"}, {"c", "b"}, {"bc", "cd"}, {"cd", "bc"}}, expect: []float64{3.75000, 0.40000, 5.00000, 0.20000}},
	{equations: [][]string{{"a", "b"}}, values: []float64{0.5}, queries: [][]string{{"a", "b"}, {"b", "a"}, {"a", "c"}, {"x", "y"}}, expect: []float64{0.50000, 2.00000, -1.00000, -1.00000}},
}

func TestCalcEquations(t *testing.T) {
	for _, test := range calcEquationTests {
		if result := calcEquation(test.equations, test.values, test.queries); !reflect.DeepEqual(test.expect, result) {
			t.Errorf("calcEquations: %v, %v, %v => %v but expected %v", test.equations, test.values, test.queries, result, test.expect)
		}
	}
}
