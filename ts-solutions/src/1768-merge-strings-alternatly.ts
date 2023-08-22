export function mergeAlternately(word1: string, word2: string): string {
	let response = ``
	let word1Index = 0
	let word2Index = 0
	while (word1Index < word1.length || word2Index < word2.length) {
		if (word1Index < word1.length) {
			response += word1[word1Index]
			word1Index++
		}
		if (word2Index < word2.length) {
			response += word2[word2Index]
			word2Index++
		}
	}
	return response
}
