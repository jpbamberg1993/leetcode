export function gcdOfStrings(str1: string, str2: string): string {
	if (str1 + str2 !== str2 + str1) {
		return ``
	}

	const gcdLength = gcd(str1.length, str2.length)
	return str1.substring(0, gcdLength)
}

function gcd(x: number, y: number) {
	if (y === 0) {
		return x
	} else {
		return gcd(y, x % y)
	}
}
