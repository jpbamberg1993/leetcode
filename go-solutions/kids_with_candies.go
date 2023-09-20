package leetcode

func KidsWithCandies(candies []int, extraCandies int) []bool {
	var result = make([]bool, len(candies))
	highestOne := [2]int{-1, -1}
	for i, candy := range candies {
		if candy > highestOne[1] {
			highestOne = [2]int{i, candy}
		}
	}
	for i, candy := range candies {
		if candy+extraCandies >= highestOne[1] {
			result[i] = true
		}
	}
	return result
}
