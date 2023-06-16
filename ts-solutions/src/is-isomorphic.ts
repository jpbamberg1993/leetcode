export function isIsomorphic(s: string, t: string): boolean {
	return transformString(s) === transformString(t)
}

function transformString(s: string): string {
	const charIndexer = new Map<string, number>()
	let response = ``
	for (let i = 0; i < s.length; i++) {
		const char = s[i]
		if (!charIndexer.has(char)) {
			charIndexer.set(char, i)
		}
		response += `_${charIndexer.get(char)}`
	}
	return response
}
