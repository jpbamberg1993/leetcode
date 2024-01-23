export function gcdOfStrings(str1: string, str2: string): string {
	if (str1 + str2 !== str2 + str1) {
		return ``
	} else {
		const separator = gcd(str1.length, str2.length)
		return str1.substring(0, separator)
	}
}

function gcd(len1: number, len2: number): number {
	if (len2 === 0) {
		return len1
	} else {
		return gcd(len2, len1 % len2)
	}
}
