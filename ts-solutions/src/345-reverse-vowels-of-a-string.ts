export function reverseVowels(s: string) {
	let l = 0
	let r = s.length - 1
	const chars = s.split(``)

	while (l < r) {
		while (l < r && !isVowel(chars[l])) {
			l++
		}
		while (r >= 0 && !isVowel(chars[r])) {
			r--
		}
		if (l < r) {
			swapChars(chars, l, r)
			l++
			r--
		}
	}
	return chars.join(``)
}

function swapChars(s: string[], i1: number, i2: number) {
	const temp = s[i1]
	s[i1] = s[i2]
	s[i2] = temp
}

function isVowel(c: string) {
	return (
		c === `a` ||
		c === `e` ||
		c === `i` ||
		c === `o` ||
		c === `u` ||
		c === `A` ||
		c === `E` ||
		c === `I` ||
		c === `O` ||
		c === `U`
	)
}
