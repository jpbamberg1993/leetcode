package leetcode

import "go-solutions/utils"

func AsteroidCollision(asteroids []int) []int {
	stk := utils.Stack{}
	for i := 0; i < len(asteroids); i++ {
		asteroid := asteroids[i]
		stkLen := len(stk)
		if stkLen == 0 || asteroid >= 0 || stk[stkLen-1] < 0 {
			stk.Push(asteroid)
		} else {
			if stk[len(stk)-1] < -asteroid {
				stk = stk[:len(stk)-1]
				i--
			} else if -asteroid == stk[len(stk)-1] {
				stk = stk[:len(stk)-1]
			}
		}
	}
	return stk
}
