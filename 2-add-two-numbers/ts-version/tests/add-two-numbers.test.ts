import { LinkedList, ListNode } from '../src/add-two-numbers'

function generateLinkedList(arr: number[]): LinkedList {
  const linkedList = new LinkedList()
  linkedList.arrayToList(arr)
  return linkedList
}

describe('addTwoNumbers', function() {
  it('add two numbers as linked lists', function() {
    const linkedList1 = generateLinkedList([2,4,3])
    const linkedList2 = generateLinkedList([7,0,8])
    console.log('done')
  })
})
