export function calcEquation(
	equations: string[][],
	values: number[],
	queries: string[][]
): number[] {
	// step 1: build graph
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

	// step 2: answer each query with a DFS from dividend to divisor
	const answer = new Array<number>(queries.length)
	for (let i = 0; i < queries.length; i++) {
		const [dividend, divisor] = queries[i]
		if (!graph.has(dividend) || !graph.has(divisor)) {
			answer[i] = -1
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
	product: number
): number {
	visited.add(currentNode)
	const neighbors = graph.get(currentNode) ?? new Map<string, number>()
	let answer = -1.0
	const weight = neighbors.get(targetNode)
	if (weight !== undefined) {
		answer = weight * product
	} else {
		for (const [neighbor, edgeWeight] of neighbors) {
			if (visited.has(neighbor)) {
				continue
			}
			answer = searchGraph(
				graph,
				visited,
				neighbor,
				targetNode,
				product * edgeWeight
			)
			if (answer !== -1) {
				break
			}
		}
	}
	visited.delete(currentNode)
	return answer
}
