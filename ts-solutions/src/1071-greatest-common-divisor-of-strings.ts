export function gcdOfStrings(str1: string, str2: string): string {
	const len1 = str1.length
	const len2 = str2.length

	function isValid(k: number) {
		if (len1 % k !== 0 || len2 % k !== 0) {
			return false
		} else {
			const base = str1.substring(0, k)
			const n1 = len1 / k
			const n2 = len2 / k
			return base.repeat(n1) === str1 && base.repeat(n2) === str2
		}
	}

	for (let i = Math.min(len1, len2); i > 1; --i) {
		if (isValid(i)) {
			return str1.substring(0, i)
		}
	}
	return ''
}
