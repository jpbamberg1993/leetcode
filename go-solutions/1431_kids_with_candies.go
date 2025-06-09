package leetcode

func KidsWithCandies(candies []int, extraCandies int) []bool {
	result := make([]bool, len(candies))
	largestCount := 0
	for _, c := range candies {
		if c > largestCount {
			largestCount = c
		}
	}
	for i, c := range candies {
		if c+extraCandies >= largestCount {
			result[i] = true
		}
	}
	return result
}
