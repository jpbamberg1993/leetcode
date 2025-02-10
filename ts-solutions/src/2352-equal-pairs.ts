class TrieNode {
	children: Map<number, TrieNode>
	count: number

	constructor() {
		this.children = new Map()
		this.count = 0
	}
}

class Trie {
	root: TrieNode

	constructor() {
		this.root = new TrieNode()
	}

	insert(row: number[]) {
		let currentTrie = this.root
		for (const num of row) {
			if (!currentTrie.children.has(num)) {
				currentTrie.children.set(num, new TrieNode())
			}
			currentTrie = currentTrie.children.get(num) ?? new TrieNode()
		}
		currentTrie.count++
	}

	search(column: number[]) {
		let currentTrie = this.root
		for (const n of column) {
			currentTrie = currentTrie.children.get(n) ?? new TrieNode()
			if (!currentTrie) {
				return 0
			}
		}
		return currentTrie.count
	}
}

export const equalPairs = (nums: number[][]) => {
	const trie = new Trie()
	for (const row of nums) {
		trie.insert(row)
	}

	let count = 0
	for (let i = 0; i < nums.length; i++) {
		const rowLength = nums[i].length
		const column = new Array<number>(rowLength).fill(0)
		for (let j = 0; j < rowLength; j++) {
			column[j] = nums[j][i]
		}
		count += trie.search(column)
	}
	return count
}
