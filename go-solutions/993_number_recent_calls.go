package leetcode

import "container/list"

type RecentCounter struct {
	queue *list.List
}

func Constructor() RecentCounter {
	return RecentCounter{queue: list.New()}
}

func (rc *RecentCounter) Ping(t int) int {
	rc.queue.PushBack(t)
	for rc.queue.Front().Value.(int) < t-3000 {
		rc.queue.Remove(rc.queue.Front())
	}
	return rc.queue.Len()
}
