package leetcode

func CanPlaceFlowers(flowerbed []int, n int) bool {
	for i := 0; i < len(flowerbed); i++ {
		if flowerbed[i] == 1 {
			continue
		}
		canPlaceLeft := i == 0 || flowerbed[i-1] == 0
		canPlaceRight := i == len(flowerbed)-1 || flowerbed[i+1] == 0
		if canPlaceLeft && canPlaceRight {
			i += 1
			n--
			if n == 0 {
				return true
			}
		}
	}
	return n <= 0
}
