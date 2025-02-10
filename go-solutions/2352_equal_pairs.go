package leetcode

// todo: re write using strings for key's and counts for values
type Trie struct {
	children map[int]*Trie
	count    int
}

func NewTrie() *Trie {
	return &Trie{children: make(map[int]*Trie), count: 0}
}

func (t *Trie) Insert(column []int) {
	currentTrie := t
	for _, v := range column {
		if _, ok := currentTrie.children[v]; !ok {
			currentTrie.children[v] = NewTrie()
		}
		currentTrie = currentTrie.children[v]
	}
	currentTrie.count++
}

func (t *Trie) Search(column []int) int {
	currentTrie := t
	for _, v := range column {
		child, ok := currentTrie.children[v]
		if ok {
			currentTrie = child
		} else {
			return 0
		}
	}
	return currentTrie.count
}

func EqualPairs(grid [][]int) int {
	rootTrie := NewTrie()
	for _, row := range grid {
		rootTrie.Insert(row)
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
