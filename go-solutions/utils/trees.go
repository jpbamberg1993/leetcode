package utils

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// BuildTree builds a binary tree from a level-order slice where.
// Example: []any{3, 9, 20, nil, nil, 15, 7}
func BuildTree(vals []any) *TreeNode {
	if len(vals) == 0 || vals[0] == nil {
		return nil
	}

	// helper to get int from any
	getInt := func(v any) (int, bool) {
		switch x := v.(type) {
		case int:
			return x, true
		case int32:
			return int(x), true
		case int64:
			return int(x), true
		case float64: // sometimes tests use JSON-decoded numbers
			return int(x), true
		default:
			return 0, false
		}
	}

	val, _ := getInt(vals[0])
	root := &TreeNode{Val: val}
	queue := []*TreeNode{root}
	i := 1

	for len(queue) > 0 && i < len(vals) {
		node := queue[0]
		queue = queue[1:]

		if i < len(vals) && vals[i] != nil {
			if v, ok := getInt(vals[i]); ok {
				node.Left = &TreeNode{Val: v}
				queue = append(queue, node.Left)
			}
		}
		i++

		if i < len(vals) && vals[i] != nil {
			if v, ok := getInt(vals[i]); ok {
				node.Right = &TreeNode{Val: v}
				queue = append(queue, node.Right)
			}
		}
		i++
	}

	return root
}
