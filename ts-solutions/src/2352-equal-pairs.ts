export const equalPairs = (grid: number[][]): number => {
	const rows = new Map<string, number>()
	for (const row of grid) {
		const key = numsToString(row)
		if (rows.has(key)) {
			rows.set(key, rows.get(key)! + 1)
		} else {
			rows.set(key, 1)
		}
	}
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		const column = new Array<number>()
		for (let j = 0; j < grid.length; j++) {
			column[j] = grid[j][i]
		}
		const key = numsToString(column)
		if (rows.has(key)) {
			count += rows.get(key)!
		}
	}
	return count
}

const numsToString = (nums: number[]) => {
	return nums.join(`,`)
}
