package leetcode

func AsteroidCollision(asteroids []int) []int {
	var result []int
	for i := 0; i < len(asteroids); i++ {
		asteroid := asteroids[i]
		if len(result) == 0 || result[len(result)-1] < 0 || asteroid > 0 {
			result = append(result, asteroid)
		} else {
			if -asteroid > result[len(result)-1] {
				result = result[:len(result)-1]
				i--
			} else if -asteroid == result[len(result)-1] {
				result = result[:len(result)-1]
			}
		}
	}
	return result
}
