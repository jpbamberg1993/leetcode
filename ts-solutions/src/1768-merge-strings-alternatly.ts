export function mergeAlternately(word1: string, word2: string): string {
	const m = word1.length
	const n = word2.length
	let result = ``
	for (let i = 0; i < Math.max(m, n); i++) {
		if (i < m) {
			result += word1[i]
		}
		if (i < n) {
			result += word2[i]
		}
	}
	return result
}
