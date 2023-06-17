export function isIsomorphic(s: string, t: string): boolean {
	const sToTMapper = new Map<string, string>()
	const tToSMapper = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		const sChar = s[i]
		const tChar = t[i]

		if (!sToTMapper.has(sChar) && !tToSMapper.has(tChar)) {
			sToTMapper.set(sChar, tChar)
			tToSMapper.set(tChar, sChar)
		}

		if (sToTMapper.get(sChar) !== tChar || tToSMapper.get(tChar) !== sChar) {
			return false
		}
	}

	return true
}
