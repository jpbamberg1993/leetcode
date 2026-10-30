export function calcEquation(
	equations: string[][],
	values: number[],
	queries: string[][]
): number[] {
	const graph = new Map<string, Map<string, number>>()
	for (let i = 0; i < equations.length; i++) {
		const [dividend, divisor] = equations[i]
		const quotient = values[i]
		if (!graph.has(dividend)) {
			graph.set(dividend, new Map())
		}
		if (!graph.has(divisor)) {
			graph.set(divisor, new Map())
		}
		graph.get(dividend)?.set(divisor, quotient)
		graph.get(divisor)?.set(dividend, 1 / quotient)
	}

	const answer = new Array(queries.length)
	for (let i = 0; i < queries.length; i++) {
		const [dividend, divisor] = queries[i]
		if (!graph.has(dividend) || !graph.has(divisor)) {
			answer[i] = -1.0
		} else {
			const visited = new Set<string>()
			answer[i] = searchGraph(graph, visited, dividend, divisor, 1)
		}
	}
	return answer
}

function searchGraph(
	graph: Map<string, Map<string, number>>,
	visited: Set<string>,
	currentNode: string,
	targetNode: string,
	accProduct: number
) {
	visited.add(currentNode)
	const neighbors = graph.get(currentNode) ?? new Map<string, number>()
	const weight = neighbors.get(targetNode)
	let answer = -1.0
	if (weight !== undefined) {
		answer = weight * accProduct
	} else {
		for (const [neighbor, edgeWeight] of neighbors) {
			if (visited.has(neighbor)) continue
			answer = searchGraph(
				graph,
				visited,
				neighbor,
				targetNode,
				accProduct * edgeWeight
			)
			if (answer !== -1.0) break
		}
	}
	return answer
}
