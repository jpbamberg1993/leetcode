export function isIsomorphic(s: string, t: string): boolean {
	const sToTMap = new Map<string, string>()
	const tToSMap = new Map<string, string>()

	for (let i = 0; i < s.length; i++) {
		if (!sToTMap.has(s[i]) && !tToSMap.has(t[i])) {
			sToTMap.set(s[i], t[i])
			tToSMap.set(t[i], s[i])
			continue
		}

		if (sToTMap.get(s[i]) !== t[i] || tToSMap.get(t[i]) !== s[i]) {
			return false
		}
	}

	return true
}
