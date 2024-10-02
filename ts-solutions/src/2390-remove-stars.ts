export function removeStars(s: string) {
	const stack = new Array<string>()
	for (const ch of s) {
		if (ch === `*`) {
			stack.pop()
		} else {
			stack.push(ch)
		}
	}
	return stack.join(``)
}
