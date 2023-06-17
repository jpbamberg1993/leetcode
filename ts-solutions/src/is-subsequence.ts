export function isSubsequence(s: string, t: string): boolean {
	let currentCharIndexForS = 0
	for (let i = 0; i < t.length; i++) {
		if (currentCharIndexForS >= s.length) {
			return true
		}
		if (t[i] === s[currentCharIndexForS]) {
			currentCharIndexForS++
		}
	}
	return currentCharIndexForS >= s.length
}
