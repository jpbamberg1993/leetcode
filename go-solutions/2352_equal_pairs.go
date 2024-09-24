package leetcode

type TrieNode struct {
	count    int
	children map[int]*TrieNode
}

type Trie struct {
	root *TrieNode
}

func NewTrie() *Trie {
	return &Trie{root: &TrieNode{children: make(map[int]*TrieNode)}}
}

func (t *Trie) SetNodes(nums []int) {
	myTrie := t.root
	for _, num := range nums {
		if _, exists := myTrie.children[num]; !exists {
			myTrie.children[num] = &TrieNode{children: make(map[int]*TrieNode)}
		}
		myTrie = myTrie.children[num]
	}
	myTrie.count += 1
}

func (t *Trie) Search(nums []int) int {
	myTrie := t.root
	for _, num := range nums {
		value, exists := myTrie.children[num]
		if exists {
			myTrie = value
		} else {
			return 0
		}
	}
	return myTrie.count
}

func EqualPairs(grid [][]int) int {
	trie := NewTrie()
	for _, row := range grid {
		trie.SetNodes(row)
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
