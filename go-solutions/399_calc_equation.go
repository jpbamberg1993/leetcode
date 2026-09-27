package leetcode

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	// step 1) buildup graph
	graph := make(map[string]map[string]float64)

	for i, e := range equations {
		divider, divisor := e[0], e[1]
		quotient := values[i]

		if _, exists := graph[divider]; !exists {
			graph[divider] = make(map[string]float64)
		}
		if _, exists := graph[divisor]; !exists {
			graph[divisor] = make(map[string]float64)
		}

		graph[divider][divisor] = quotient
		graph[divisor][divider] = 1 / quotient
	}

	// step 2) search graph
	answer := make([]float64, len(queries))
	for i, query := range queries {
		dividend, divisor := query[0], query[1]
		_, hasDividend := graph[dividend]
		_, hasDivisor := graph[divisor]

		if !hasDividend || !hasDivisor {
			answer[i] = -1.0
		} else {
			visited := make(map[string]bool)
			answer[i] = searchGraph(graph, dividend, divisor, 1, visited)
		}
	}

	return answer
}

func searchGraph(graph map[string]map[string]float64, currentNode, targetNode string, accProduct float64, visited map[string]bool) float64 {
	visited[currentNode] = true
	answer := -1.0
	neighbors := graph[currentNode]
	if weight, exists := neighbors[targetNode]; exists {
		answer = weight * accProduct
	} else {
		for k, v := range neighbors {
			if visited[k] {
				continue
			}
			answer = searchGraph(graph, k, targetNode, accProduct*v, visited)
			if answer != -1 {
				return answer
			}
		}
	}
	return answer
}
