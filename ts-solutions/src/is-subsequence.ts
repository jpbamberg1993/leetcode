export function isSubsequence(s: string, t: string): boolean {
	const sLength = s.length

	let leftIndex = 0
	for (let i = 0; i < t.length; i++) {
		if (leftIndex === sLength) {
			return true
		}
		if (s[leftIndex] === t[i]) {
			leftIndex++
		}
	}

	return leftIndex === sLength
}
