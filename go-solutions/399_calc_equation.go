package leetcode

func calcEquation(equations [][]string, values []float64, queries [][]string) (solutions []float64) {
	graph := make(map[string]map[string]float64)

	// build up the graph
	for i, equation := range equations {
		dividend := equation[0]
		divisor := equation[1]
		quotient := values[i]

		if _, exists := graph[dividend]; !exists {
			graph[dividend] = make(map[string]float64)
		}
		if _, exists := graph[divisor]; !exists {
			graph[divisor] = make(map[string]float64)
		}

		graph[dividend][divisor] = quotient
		graph[divisor][divisor] = 1 / quotient
	}

	// search the graph
	results := make([]float64, len(equations))
	for i, query := range queries {
		dividend, divisor := query[0], query[1]
		_, hasDividend := graph[dividend]
		_, hasDivisor := graph[divisor]
		if !hasDividend || !hasDivisor {
			results[i] = -1
		} else if dividend == divisor {
			results[i] = 1
		} else {
			visited := make(map[string]bool)
			results[i] = backtraceEvaluate(graph, dividend, divisor, 1, visited)
		}
	}

	return results
}

func backtraceEvaluate(graph map[string]map[string]float64, currentNode, targetNode string, accProduct float64, visited map[string]bool) float64 {
	visited[currentNode] = true
	answer := -1.0

	neighbors := graph[currentNode]
	if weight, ok := neighbors[targetNode]; ok {
		answer = accProduct * weight
	} else {
		for k, v := range neighbors {
			if visited[k] {
				continue
			}
			answer = backtraceEvaluate(graph, k, targetNode, accProduct*v, visited)
			if answer != -1.0 {
				break
			}
		}
	}

	visited[currentNode] = false
	return answer
}
