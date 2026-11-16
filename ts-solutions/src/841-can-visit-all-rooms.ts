export function canVisitAllRooms(rooms: number[][]): boolean {
	const n = rooms.length
	const visited = new Array<boolean>(n).fill(false)
	visited[0] = true
	let visitedCount = 1
	const stack = [0]

	while (stack.length) {
		const room = stack.pop()
		if (room === undefined) break
		for (const key of rooms[room]) {
			if (visited[key]) continue
			visited[key] = true
			if (++visitedCount === n) return true
			stack.push(key)
		}
	}

	return visitedCount >= n
}
