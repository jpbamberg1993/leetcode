export const uniqueOccurrences = (arr: number[]) => {
	const myMap = new Map<number, number>()
	for (const num of arr) {
		myMap.set(num, (myMap.get(num) || 0) + 1)
	}
	const mySet = new Set<number>(myMap.values())
	return myMap.size === mySet.size
}
