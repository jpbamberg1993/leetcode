package leetcode

func EqualPairs(grid [][]int) int {
	trie := NewTrie()
	for _, row := range grid {
		trie.Save(row)
	}
	count := 0
	for i := 0; i < len(grid); i++ {
		column := make([]int, len(grid))
		for j := 0; j < len(grid); j++ {
			column[j] = grid[j][i]
		}
		count += trie.Search(column)
	}
	return count
}

type Trie struct {
	next  map[int]*Trie
	count int
}

func NewTrie() *Trie {
	return &Trie{
		next: make(map[int]*Trie),
		count: 0,
	}
}

func (t *Trie) Save(values []int) {
	currentTrie := t
	for i := 0; i < len(values); i++ {
		if _, ok := currentTrie.next[values[i]]; !ok {
			currentTrie.next[values[i]] = NewTrie()
		}
		currentTrie = currentTrie.next[values[i]]
		if i == len(values)-1 {
			currentTrie.count += 1
		}
	}
}

func (t *Trie) Search(values []int) int {
	currentTrie := t
	for _, v := range values {
		if trie, ok := currentTrie.next[v]; ok {
			currentTrie = trie
		} else {
			return 0
		}
	}
	return currentTrie.count
}
