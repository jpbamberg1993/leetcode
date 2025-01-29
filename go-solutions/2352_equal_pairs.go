package leetcode

type Trie struct {
	children map[int]*Trie
	count    int
}

func (t *Trie) Search(column []int) int {
	currentTrie := t
	for _, v := range column {
		child, ok := currentTrie.children[v]
		if !ok {
			return 0
		} else {
			currentTrie = child
		}
	}
	return currentTrie.count
}

func EqualPairs(grid [][]int) int {
	rootTrie := &Trie{children: make(map[int]*Trie), count: 0}
	for _, row := range grid {
		curTrie := rootTrie
		for _, v := range row {
			if _, ok := curTrie.children[v]; !ok {
				curTrie.children[v] = &Trie{children: make(map[int]*Trie), count: 0}
			}
			curTrie = curTrie.children[v]
		}
		curTrie.count++
	}
	count := 0
	for i := 0; i < len(grid); i++ {
		column := make([]int, len(grid[i]))
		for j := 0; j < len(grid[i]); j++ {
			column[j] = grid[j][i]
		}
		count += rootTrie.Search(column)
	}
	return count
}
