package leetcode

func AsteroidCollision(asteroids []int) []int {
	var result []int
	for i := 0; i < len(asteroids); i++ {
		asteroid := asteroids[i]
		resultLen := len(result)
		if resultLen == 0 || result[resultLen-1] < 0 || asteroid > 0 {
			result = append(result, asteroid)
		} else {
			last := result[resultLen-1]
			if -asteroid > last {
				result = result[:resultLen-1]
				i--
			} else if -asteroid == last {
				result = result[:resultLen-1]
			} else {
				continue
			}
		}
	}
	return result
}
