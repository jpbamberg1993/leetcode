package leetcode

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	graph := make(map[string]map[string]float64)

	// step1: build up graph
	for i, v := range equations {
		dividend, divisor, quotient := v[0], v[1], values[i]
		if _, exists := graph[dividend]; !exists {
			graph[dividend] = make(map[string]float64)
		}
		if _, exists := graph[divisor]; !exists {
			graph[divisor] = make(map[string]float64)
		}
		graph[dividend][divisor] = quotient
		graph[divisor][dividend] = 1 / quotient
	}

	// step2: search graph
	answer := make([]float64, len(queries))
	for i, v := range queries {
		dividend, divisor := v[0], v[1]
		_, hasDivider := graph[dividend]
		_, hasDivisor := graph[divisor]
		if !hasDivider || !hasDivisor {
			answer[i] = -1.0
		} else {
			visited := make(map[string]bool)
			answer[i] = searchGraph(graph, visited, dividend, divisor, 1)
		}
	}
	return answer
}

func searchGraph(graph map[string]map[string]float64, visited map[string]bool, currNode, targetNode string, product float64) float64 {
	visited[currNode] = true
	answer := -1.0
	neighbors := graph[currNode]
	if weight, exists := neighbors[targetNode]; exists {
		answer = weight * product
	} else {
		for k, v := range neighbors {
			if visited[k] {
				continue
			}
			answer = searchGraph(graph, visited, k, targetNode, product*v)
			if answer != -1 {
				break
			}
		}
	}
	visited[currNode] = false
	return answer
}
