package leetcode

import (
	"testing"
)

type dotaSenateTest struct {
	senate string
	expect string
}

var dotaSenateTests = []dotaSenateTest{
	{"RD", "Radiant"},
	{"RDD", "Dire"},
	{"RD", "Radiant"},
}

func Test_DotaSenate(t *testing.T) {
	for _, test := range dotaSenateTests {
		if output := predictPartyVictory(test.senate); output != test.expect {
			t.Errorf("Input senate: %q => %q not equal to %q", test.senate, output, test.expect)
		}
	}
}

func Benchmark_DotaSenate(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, t := range dotaSenateTests {
			_ = predictPartyVictory(t.senate)
		}
	}
}
