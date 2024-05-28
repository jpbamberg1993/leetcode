export function compress(chars: string[]) {
	let i = 0
	let res = 0
	while (i < chars.length) {
		let groupLen = 0
		while (i + groupLen < chars.length && chars[i] === chars[i + groupLen]) {
			groupLen++
		}
		chars[res] = chars[i]
		res++
		if (groupLen > 1) {
			const gs = groupLen.toString()
			for (const g of gs) {
				chars[res] = g
				res++
			}
		}
		i += groupLen
	}
	return res
}
