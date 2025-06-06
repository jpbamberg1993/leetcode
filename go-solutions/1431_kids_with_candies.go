package leetcode

func KidsWithCandies(candies []int, extraCandies int) []bool {
	result := make([]bool, len(candies))
	m := -1
	for _, candy := range candies {
		if candy > m {
			m = candy
		}
	}
	for i := 0; i < len(candies); i++ {
		result[i] = candies[i]+extraCandies >= m
	}
	return result
}
