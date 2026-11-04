type Edge = { to: number; isOriginal: boolean }

export function minReorder(n: number, connections: number[][]): number {
	const graph: Edge[][] = Array.from({ length: n }, () => [])
	for (const [a, b] of connections) {
		graph[a].push({ to: b, isOriginal: true })
		graph[b].push({ to: a, isOriginal: false })
	}

	let reversedCount = 0
	const dps = function (parent: number, node: number) {
		if (parent === node) {
			return
		}
		const neighbors = graph[node]
		for (const { to, isOriginal } of neighbors) {
			if (to === parent) continue
			if (isOriginal) {
				reversedCount++
			}
			dps(node, to)
		}
	}
	dps(-1, 0)

	return reversedCount
}
