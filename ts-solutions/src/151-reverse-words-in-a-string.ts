export function reverseWord(s: string): string {
	return s
		.split(` `)
		.filter((w) => w !== ``)
		.reverse()
		.join(` `)
}
