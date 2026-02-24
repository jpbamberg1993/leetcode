package leetcode

func EqualPairs(grid [][]int) int {
	t := NewTrie()
	for _, row := range grid {
		t.Insert(row)
	}
	totalPairs := 0
	for i := 0; i < len(grid); i++ {
		column := make([]int, len(grid[i]))
		for j := 0; j < len(grid[i]); j++ {
			column[j] = grid[j][i]
		}
		totalPairs += t.SearchCount(column)
	}
	return totalPairs
}

type Trie struct {
	count    int
	children map[int]*Trie
}

func NewTrie() *Trie {
	return &Trie{
		count:    0,
		children: make(map[int]*Trie),
	}
}

func (t *Trie) Insert(nums []int) {
	currentTrie := t
	for _, v := range nums {
		_, ok := currentTrie.children[v]
		if !ok {
			currentTrie.children[v] = NewTrie()
		}
		currentTrie = currentTrie.children[v]
	}
	currentTrie.count++
}

func (t *Trie) SearchCount(nums []int) int {
	currentTrie := t
	for _, num := range nums {
		if v, ok := currentTrie.children[num]; ok {
			currentTrie = v
		} else {
			return 0
		}
	}
	return currentTrie.count
}
