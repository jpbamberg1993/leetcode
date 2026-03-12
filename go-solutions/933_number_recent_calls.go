package leetcode

type RecentCalls struct {
	queue []int
}

func Constructor() *RecentCalls {
	return &RecentCalls{queue: []int{}}
}

func (rc *RecentCalls) Ping(t int) (count int) {
	rc.queue = append(rc.queue, t)
	for len(rc.queue) > 0 && rc.queue[0] < t-3000 {
		rc.queue = rc.queue[1:]
	}
	return len(rc.queue)
}
