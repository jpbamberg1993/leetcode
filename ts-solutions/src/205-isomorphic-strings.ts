export function isIsomorphic(s: string, t: string): boolean {
	const sToTMap = new Map<string, string>()
	const tToSMap = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		if (sToTMap.has(s[i]) || tToSMap.has(t[i])) {
			const sReplacement = sToTMap.get(s[i]) ?? ``
			const tReplacement = tToSMap.get(sReplacement)

			if (tReplacement !== s[i]) {
				return false
			}

			if (sReplacement === t[i] && tReplacement === s[i]) {
				continue
			} else {
				return false
			}
		} else {
			sToTMap.set(s[i], t[i])
			tToSMap.set(t[i], s[i])
		}
	}

	return true
}
