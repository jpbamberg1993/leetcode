package leetcode

func CanPlaceFlowers(flowerbed []int, n int) bool {
	flowerbedLen := len(flowerbed)
	count := 0
	for i := 0; i < flowerbedLen; i++ {
		if flowerbed[i] == 1 {
			continue
		}
		emptyLeftPlot := (i == 0) || (flowerbed[i-1] == 0)
		emptyRightPlot := (i == flowerbedLen-1) || (flowerbed[i+1] == 0)
		if emptyLeftPlot && emptyRightPlot {
			flowerbed[i] = 1
			count++
			if count >= n {
				return true
			}
		}
	}
	return count >= n
}
