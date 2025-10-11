package leetcode

import (
	"strings"
)

func RemoveStars(s string) string {
	stack := List{}
	for i := 0; i < len(s); i++ {
		if s[i] == '*' {
			stack.PopFront()
		} else {
			stack.PushFront(s[i])
		}
	}
	return stack.String()
}

type ListItem struct {
	Value uint8
	Next  *ListItem
	Prev  *ListItem
}

type List struct {
	head *ListItem
	tail *ListItem
	size int
}

func (l *List) PushFront(v uint8) {
	n := &ListItem{Value: v}
	if l.head == nil {
		l.head = n
		l.tail = n
	} else {
		l.head.Prev = n
		n.Next = l.head
		l.head = n
	}
	l.size++
}

func (l *List) PopFront() (v uint8) {
	if l.size < 1 {
		return 0
	}
	frontValue := l.head.Value
	l.head = l.head.Next
	if l.head == nil {
		l.tail = nil
	}
	l.size--
	return frontValue
}

func (l *List) String() string {
	builder := strings.Builder{}
	currentItem := l.tail
	for currentItem != nil {
		builder.WriteByte(currentItem.Value)
		currentItem = currentItem.Prev
	}
	return builder.String()
}

//type Stack struct {
//	data []byte
//}
//
//func (s *Stack) Push(v byte) {
//	s.data = append(s.data, v)
//}
//
//func (s *Stack) Pop() (v byte) {
//	lastValue := s.data[len(s.data)-1]
//	s.data = s.data[:len(s.data)-1]
//	return lastValue
//}
//
//func (s *Stack) String() string {
//	var b strings.Builder
//	for _, v := range s.data {
//		b.WriteByte(v)
//	}
//	return b.String()
//}
