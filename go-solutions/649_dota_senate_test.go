package leetcode

import (
	"testing"
)

type dotaSenateTest struct {
	senate string
	expect string
}

var dotaSenateTests = []dotaSenateTest{
	{"RD", radiant},
	{"RDD", dire},
}

func Test_DotaSenate(t *testing.T) {
	for _, test := range dotaSenateTests {
		if output := predictPartyVictory(test.senate); output != test.expect {
			t.Errorf("Input senate: %q => %q not equal to %q", test.senate, output, test.expect)
		}
	}
}
