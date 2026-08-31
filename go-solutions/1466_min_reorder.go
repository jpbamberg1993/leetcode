package leetcode

type edge struct {
	to       int
	original bool
}

func minReorder(n int, connections [][]int) int {
	adj := make([][]edge, n)
	for _, c := range connections {
		adj[c[0]] = append(adj[c[0]], edge{c[1], true})
		adj[c[1]] = append(adj[c[1]], edge{c[0], false})
	}

	count := 0
	var dps func(node, parent int)
	dps = func(node, parent int) {
		for _, e := range adj[node] {
			if e.to != parent {
				if e.original {
					count++
				}
				dps(e.to, node)
			}
		}
	}

	dps(0, -1)
	return count
}
