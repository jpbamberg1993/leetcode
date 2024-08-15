export const uniqueOccurrences = (arr: number[]) => {
	const myMap = new Map<number, number>()
	for (const num of arr) {
		myMap.set(num, (myMap.get(num) || 0) + 1)
	}
	const mySet = new Set<number>()
	for (const v of myMap.values()) {
		if (mySet.has(v)) {
			return false
		} else {
			mySet.add(v)
		}
	}
	return true
}
