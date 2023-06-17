export function isSubsequence(s: string, t: string): boolean {
	const sLength = s.length
	const tLength = t.length

	let leftIndex = 0
	let rightIndex = 0
	while (leftIndex < sLength && rightIndex < tLength) {
		if (s[leftIndex] === t[rightIndex]) {
			leftIndex++
		}
		rightIndex++
	}
	return leftIndex === sLength
}
