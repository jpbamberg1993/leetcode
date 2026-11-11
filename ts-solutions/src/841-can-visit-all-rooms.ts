export function canVisitAllRooms(rooms: number[][]): boolean {
	const n = rooms.length
	const visited = new Array<boolean>(n).fill(false)

	const dps = (room: number) => {
		visited[room] = true
		for (const key of rooms[room]) {
			if (visited[key]) continue
			dps(key)
		}
	}

	dps(0)

	return visited.every((v) => v)
}
