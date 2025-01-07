export const decodeString = (s: string) => {
	index = 0
	return decodeStringFunc(s)
}

let index = 0

const decodeStringFunc = (s: string) => {
	let result = ``
	while (index < s.length && s[index] != `]`) {
		if (!isNumber(s.charAt(index))) {
			result += s.charAt(index)
			index++
		} else {
			let count = 0
			while (isNumber(s.charAt(index))) {
				const x = Number(s.charAt(index))
				count = 10 * count + x
				index++
			}
			index++
			const decodedString = decodeStringFunc(s)
			index++
			while (count > 0) {
				result += decodedString
				count--
			}
		}
	}
	return result
}

const isNumber = (ch: string) => {
	return !isNaN(Number(ch))
}
