export function reverseVowels(s: string): string {
	let result = s.split('')
	let start = 0
	let end = s.length - 1
	while (start < end) {
		while (start < end && !isVowel(s[start])) {
			start++
		}
		while (end > start && !isVowel(s[end])) {
			end--
		}
		if (start < end) {
			swapVowels(result, start++, end--)
		}
	}
	return result.join('')
}

function isVowel(ch: string): boolean {
	return (
		ch === 'A' ||
		ch === 'a' ||
		ch === 'E' ||
		ch === 'e' ||
		ch === 'I' ||
		ch === 'i' ||
		ch === 'O' ||
		ch === 'o' ||
		ch === 'U' ||
		ch === 'u'
	)
}

function swapVowels(s: string[], i: number, j: number) {
	const temp = s[i]
	s[i] = s[j]
	s[j] = temp
}
