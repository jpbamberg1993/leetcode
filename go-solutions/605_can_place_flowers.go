package leetcode

func CanPlaceFlowers(flowerbed []int, n int) bool {
	count := 0
	for i := 0; i < len(flowerbed); i++ {
		if flowerbed[i] != 0 {
			continue
		}
		canPlaceLeft := i == 0 || flowerbed[i-1] == 0
		canPlaceRight := i == len(flowerbed)-1 || flowerbed[i+1] == 0
		if canPlaceLeft && canPlaceRight {
			flowerbed[i] = 1
			count++
			if count >= n {
				return true
			}
		}
	}
	return count >= n
}
