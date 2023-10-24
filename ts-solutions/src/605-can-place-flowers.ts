export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let count = 0
	let currentIndex = 0
	const flowerbedLength = flowerbed.length
	while (currentIndex < flowerbedLength) {
		if (flowerbed[currentIndex] === 1) {
			currentIndex++
			continue
		}
		const leftSideEmpty =
			currentIndex === 0 || flowerbed[currentIndex - 1] === 0
		const rightSideEmpty =
			currentIndex === flowerbedLength - 1 || flowerbed[currentIndex + 1] === 0
		if (leftSideEmpty && rightSideEmpty) {
			currentIndex += 2
			count++
			if (count >= n) return true
		} else {
			currentIndex += 1
		}
	}
	return count >= n
}
