export const equalPairs = (grid: number[][]) => {
	const rows = new Map<string, number>()
	for (let i = 0; i < grid.length; i++) {
		const row = JSON.stringify(grid[i])
		rows.set(row, 1 + (rows.get(row) || 0))
	}
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		const column = JSON.stringify(grid.map((g) => g[i]))
		count += rows.get(column) || 0
	}
	return count
}
