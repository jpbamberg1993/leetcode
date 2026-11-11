export function findCircleNum(isConnected: number[][]): number {
	const n = isConnected.length
	const isVisited = new Array<boolean>(n).fill(false)

	const dps = (city: number) => {
		for (const [neighbor, connected] of isConnected[city].entries()) {
			if (connected === 1 && !isVisited[neighbor]) {
				isVisited[neighbor] = true
				dps(neighbor)
			}
		}
	}

	let provinces = 0
	for (let i = 0; i < isConnected.length; i++) {
		if (!isVisited[i]) {
			dps(i)
			provinces++
		}
	}
	return provinces
}
