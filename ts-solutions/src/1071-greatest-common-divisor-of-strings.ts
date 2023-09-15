export function gcdOfStrings(str1: string, str2: string): string {
	if (str1.length > str2.length) {
		;[str1, str2] = [str2, str1]
	}

	let currentIndex = 0
	let endingIndex = -1
	while (currentIndex < str1.length) {
		const substring = str1.substring(0, currentIndex + 1)
		const matchesStr1 = repeatedMatchesString(substring, str1)
		const matchesStr2 = repeatedMatchesString(substring, str2)
		if (matchesStr1 && matchesStr2) {
			endingIndex = currentIndex
		}
		currentIndex++
	}
	return str1.substring(0, endingIndex + 1)
}

function repeatedMatchesString(substring: string, str1: string) {
	const repeatCount = str1.length % substring.length
	if (repeatCount !== 0) {
		return false
	}
	let substringClone = substring
	while (substringClone.length < str1.length) {
		substringClone += substring
	}
	return substringClone === str1
}
