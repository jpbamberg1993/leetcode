export function mergeAlternately(word1: string, word2: string): string {
	let result = ``
	let currentIndex = 0
	const word1Len = word1.length
	const word2Len = word2.length
	while (currentIndex < word1Len && currentIndex < word2Len) {
		result += word1[currentIndex]
		result += word2[currentIndex]
		currentIndex++
	}
	if (currentIndex < word1Len) {
		result += word1.substring(currentIndex)
	}
	if (currentIndex < word2Len) {
		result += word2.substring(currentIndex)
	}
	return result
}
