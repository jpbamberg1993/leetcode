package leetcode

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	// step 1: build graph
	graph := make(map[string]map[string]float64, len(equations)*2)
	for i, e := range equations {
		dividend, divisor, quotient := e[0], e[1], values[i]
		if _, exists := graph[dividend]; !exists {
			graph[dividend] = make(map[string]float64)
		}
		if _, exists := graph[divisor]; !exists {
			graph[divisor] = make(map[string]float64)
		}
		graph[dividend][divisor] = quotient
		graph[divisor][dividend] = 1 / quotient
	}

	// step 2: search graph
	answer := make([]float64, len(queries))
	for i, q := range queries {
		dividend, divisor := q[0], q[1]
		_, hasDividend := graph[dividend]
		_, hasDivisor := graph[divisor]
		if !hasDividend || !hasDivisor {
			answer[i] = -1.0
		} else {
			visited := make(map[string]bool)
			answer[i] = searchGraph(graph, visited, dividend, divisor, 1)
		}
	}
	return answer
}

func searchGraph(graph map[string]map[string]float64, visited map[string]bool, current, target string, product float64) float64 {
	visited[current] = true
	answer := -1.0
	neighbors := graph[current]
	for n, v := range neighbors {
		if n == target {
			answer = v * product
			break
		} else {
			if visited[n] {
				continue
			}
			answer = searchGraph(graph, visited, n, target, product*v)
			if answer != -1 {
				break
			}
		}
	}
	visited[current] = false
	return answer
}
