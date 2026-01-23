package leetcode

func KidsWithCandies(candies []int, extra int) []bool {
	maxCandies := -1
	for _, candy := range candies {
		maxCandies = max(maxCandies, candy)
	}

	result := make([]bool, len(candies))
	for i, candy := range candies {
		result[i] = candy+extra >= maxCandies
	}
	return result
}
