export const equalPairs = (grid: number[][]): number => {
	const node = new Trie()
	for (const arr of grid) {
		node.setNodes(arr)
	}
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		const column = []
		for (let j = 0; j < grid.length; j++) {
			column[j] = grid[j][i]
		}
		count += node.searchNodes(column)
	}
	return count
}

class TrieNode {
	public count: number
	public children: Map<number, TrieNode>

	constructor() {
		this.count = 0
		this.children = new Map<number, TrieNode>()
	}
}

class Trie {
	public root: TrieNode

	constructor() {
		this.root = new TrieNode()
	}

	setNodes = (arr: number[]) => {
		let myNode = this.root
		for (const n of arr) {
			const node = myNode.children.get(n)
			if (!node) {
				myNode.children.set(n, new TrieNode())
			}
			myNode = myNode.children.get(n)!
		}
		myNode.count++
	}

	searchNodes = (arr: number[]) => {
		let myTrie = this.root
		for (const n of arr) {
			const node = myTrie.children.get(n)
			if (node) {
				myTrie = node
			} else {
				return 0
			}
		}
		return myTrie.count
	}
}
