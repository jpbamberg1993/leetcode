export function isSubsequence(s: string, t: string): boolean {
	const leftBound = s.length
	const rightBound = t.length

	function isSubsequenceRec(sIndex: number, tIndex: number): boolean {
		if (sIndex === leftBound) {
			return true
		}
		if (tIndex == rightBound) {
			return false
		}
		if (s[sIndex] === t[tIndex]) {
			sIndex++
		}
		return isSubsequenceRec(sIndex, tIndex + 1)
	}

	return isSubsequenceRec(0, 0)
}
