import { LinkedList, ListNode, addTwoNumbers } from '../src/add-two-numbers'

describe('addTwoNumbers', function() {
  it('add two numbers as linked lists', function() {
    const arr1 = [2,4,3]
    const arr2 = [7,0,8]
    const linkedList1 = new LinkedList()
    const linkedList2 = new LinkedList()
    linkedList1.arrayToList(arr1)
    linkedList2.arrayToList(arr2)
  })
})
