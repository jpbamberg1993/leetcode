export function compress(chars: string[]): number {
	let i = 0
	let res = 0
	while (i < chars.length) {
		let groupLen = 1
		while (i + groupLen < chars.length && chars[i + groupLen] === chars[i]) {
			groupLen++
		}
		chars[res++] = chars[i]
		if (groupLen > 1) {
			for (const gl of groupLen.toString()) {
				chars[res++] = gl
			}
		}
		i += groupLen
	}
	return res
}
