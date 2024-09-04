export const closeStrings = (word1: string, word2: string) => {
	if (word1.length != word2.length) {
		return false
	}
	const word1Map = new Array<number>(26).fill(0)
	const word2Map = new Array<number>(26).fill(0)
	let word1Bit = 0
	let word2Bit = 0
	for (let i = 0; i < word1.length; i++) {
		const char1 = word1.charCodeAt(i) - 97
		const char2 = word2.charCodeAt(i) - 97
		word1Map[char1]++
		word2Map[char2]++
		word1Bit = word1Bit | (1 << char1)
		word2Bit = word2Bit | (1 << char2)
	}
	if (word1Bit !== word2Bit) {
		return false
	}
	word1Map.sort()
	word2Map.sort()
	for (let i = 0; i < 26; i++) {
		if (word1Map[i] !== word2Map[i]) {
			return false
		}
	}
	return true
}
