export const removeStars = (s: string) => {
	const chars = new Array<string>(s.length)
	let j = 0
	for (const ch of s) {
		if (ch === `*`) {
			j--
		} else {
			chars[j] = ch
			j++
		}
	}
	return chars.slice(0, j).join(``)
}
