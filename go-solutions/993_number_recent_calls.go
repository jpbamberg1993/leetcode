package leetcode

import (
	"container/list"
)

type RecentCounter struct {
	queue *list.List
}

func Constructor() RecentCounter {
	return RecentCounter{queue: list.New()}
}

func (c *RecentCounter) Ping(t int) int {
	c.queue.PushBack(t)
	for c.queue.Front().Value.(int) < t-3000 {
		c.queue.Remove(c.queue.Front())
	}
	return c.queue.Len()
}
