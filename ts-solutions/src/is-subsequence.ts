export function isSubsequence(s: string, t: string): boolean {
	const leftBound = s.length,
		rightBound = t.length
	let left = 0,
		right = 0
	while (left < leftBound && right < rightBound) {
		if (s[left] === t[right]) {
			left++
		}
		right++
	}
	return left === leftBound
}
