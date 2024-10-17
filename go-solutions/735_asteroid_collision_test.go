package leetcode

import (
	"go-solutions/utils"
	"testing"
)

type asteroidCollisionTest struct {
	asteroids []int
	want      []int
}

var asteroidCollisionTests = []asteroidCollisionTest{
	{[]int{5, 10, -5}, []int{5, 10}},
	{[]int{8, -8}, []int{}},
	{[]int{10, 2, -5}, []int{10}},
}

func TestAsteroidCollision(t *testing.T) {
	for _, test := range asteroidCollisionTests {
		got := AsteroidCollision(test.asteroids)
		if utils.SliceEqual(got, test.want) == false {
			t.Errorf("passed = %v, got = %v, want = %v", test.asteroids, got, test.want)
		}
	}
}
