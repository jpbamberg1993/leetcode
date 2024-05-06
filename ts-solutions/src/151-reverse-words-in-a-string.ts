export function reverseWord(s: string) {
	const chars = s.split(` `)
	const res = []
	for (let i = chars.length - 1; i >= 0; i--) {
		if (chars[i] === ``) continue
		res.push(chars[i])
	}
	return res.join(` `).trimEnd()
}
