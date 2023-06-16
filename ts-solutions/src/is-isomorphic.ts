export function isIsomorphic(s: string, t: string): boolean {
	const sTotMap = new Map<string, string>()
	const tTosMap = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]
		const tChar = t[i]

		if (!tTosMap.has(tChar) && !sTotMap.has(sChar)) {
			sTotMap.set(sChar, tChar)
			tTosMap.set(tChar, sChar)
		}

		if (sTotMap.get(sChar) !== tChar || tTosMap.get(tChar) !== sChar) {
			return false
		}
	}

	return true
}
