package leetcode

func CanPlaceFlowers(flowerbed []int, n int) bool {
	flowerbedLen := len(flowerbed)
	count := 0
	currentIndex := 0
	for currentIndex < flowerbedLen {
		if flowerbed[currentIndex] == 1 {
			currentIndex++
			continue
		}
		emptyLeftPlot := (currentIndex == 0) || (flowerbed[currentIndex-1] == 0)
		emptyRightPlot := (currentIndex == flowerbedLen-1) || (flowerbed[currentIndex+1] == 0)
		if emptyLeftPlot && emptyRightPlot {
			currentIndex += 2
			count++
			if count >= n {
				return true
			}
		} else {
			currentIndex += 1
		}
	}
	return count >= n
}
