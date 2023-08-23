export function mergeAlternately(word1: string, word2: string): string {
	const m = word1.length
	const n = word2.length
	const response = new Array(m + n)
	let responseIndex = 0

	for (let i = 0; i < Math.max(m, n); i++) {
		if (i < m) {
			response[responseIndex] = word1[i]
			responseIndex++
		}
		if (i < n) {
			response[responseIndex] = word2[i]
			responseIndex++
		}
	}

	return response.join('')
}
