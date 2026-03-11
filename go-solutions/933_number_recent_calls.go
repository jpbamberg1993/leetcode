package leetcode

import "container/list"

type RecentCounter struct {
	queue *list.List
}

func Constructor() *RecentCounter {
	return &RecentCounter{queue: list.New()}
}

func (rc *RecentCounter) Ping(t int) int {
	rc.queue.PushFront(t)
	for rc.queue.Back().Value.(int) < t-3000 {
		rc.queue.Remove(rc.queue.Back())
	}
	return rc.queue.Len()
}
