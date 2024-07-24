export function maxVowels(s: string, k: number): number {
	let count = 0
	for (let i = 0; i < k; i++) {
		if (isVowel(s[i])) {
			count++
		}
	}
	let max = count
	for (let i = k; i < s.length; i++) {
		if (isVowel(s[i])) {
			count++
		}
		if (isVowel(s[i - k])) {
			count--
		}
		max = Math.max(max, count)
	}
	return max
}

function isVowel(ch: string): boolean {
	const vowels = [`a`, `e`, `i`, `o`, `u`]
	return vowels.includes(ch)
}
