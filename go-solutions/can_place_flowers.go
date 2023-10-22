package leetcode

import "log"

func CanPlaceFlowers(flowerbed []int, n int) bool {
	if n == 0 {
		return true
	}

	currentCount := 0
	currentIndex := 0
	for currentIndex < len(flowerbed) {
		if flowerbed[currentIndex] == 1 {
			currentIndex++
			continue
		}
		if (currentIndex == 0 || flowerbed[currentIndex-1] == 0) &&
			(currentIndex == len(flowerbed)-1 || (currentIndex+1 < len(flowerbed) && flowerbed[currentIndex+1] == 0)) {
			log.Printf("--> Current index set to true: %v\n", currentIndex)
			currentCount++
			currentIndex += 2
		} else {
			currentIndex++
		}

		if currentCount == n {
			return true
		}
	}
	return currentCount == n
}
