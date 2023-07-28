export function isSubsequence(s: string, t: string): boolean {
	let sPointer = 0
	let tPointer = 0

	while (sPointer < s.length && tPointer < t.length) {
		if (s.charAt(sPointer) === t.charAt(tPointer)) {
			sPointer++
		}
		tPointer++
	}
	return sPointer === s.length
}
