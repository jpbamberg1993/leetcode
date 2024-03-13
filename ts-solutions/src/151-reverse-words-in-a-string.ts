export function reverseWord(s: string): string {
	const result: string[] = []
	let word = ``
	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === ` `) {
			word.length > 0 && result.unshift(word)
			word = ``
		} else {
			word += s.charAt(i)
		}
	}
	word.length > 0 && result.unshift(word)
	return result.join(` `)
}
