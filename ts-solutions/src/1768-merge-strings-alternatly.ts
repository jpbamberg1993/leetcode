export function mergeAlternately(word1: string, word2: string): string {
	const response = new Array(word1.length + word2.length)
	let responseIndex = 0
	const m = word1.length
	const n = word2.length
	let i = 0
	let j = 0
	while (i < m || j < n) {
		if (i < m) {
			response[responseIndex] = word1[i]
			responseIndex++
			i++
		}
		if (j < n) {
			response[responseIndex] = word2[j]
			responseIndex++
			j++
		}
	}
	return response.join('')
}
