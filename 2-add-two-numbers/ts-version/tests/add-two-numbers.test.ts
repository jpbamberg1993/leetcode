import { addTwoNumbers } from '../src/add-two-numbers';
import { LinkedList } from "../src/LinkedList";
import { ListNode } from "../src/ListNode";

describe('addTwoNumbers', function() {
  it('add two numbers as linked lists', function() {
    const linkedList1 = generateLinkedList([2,4,3])
    const linkedList2 = generateLinkedList([5,6,4])
    const expectedResult = generateLinkedList([7,0,8])

    const result = addTwoNumbers(linkedList1.first, linkedList2.first)

    expect(result).toStrictEqual(expectedResult)
  })

  it('adds linked lists with only 1 value each', function() {
    const linkedList1 = generateLinkedList([0])
    const linkedList2 = generateLinkedList([0])
    const expectedResult = generateLinkedList([0])

    const result = addTwoNumbers(linkedList1.first, linkedList2.first)

    expect(result).toStrictEqual(expectedResult)
  })

  it('adds differently sized linked lists', function() {
    const linkedList1 = generateLinkedList([9,9,9,9,9,9,9])
    const linkedList2 = generateLinkedList([9,9,9,9])
    const expectedResult = generateLinkedList([8,9,9,9,0,0,0,1])

    const result = addTwoNumbers(linkedList1.first, linkedList2.first)

    expect(result).toStrictEqual(expectedResult)
  })
})

function generateLinkedList(arr: number[]): LinkedList {
  const linkedList = new LinkedList()
  linkedList.arrayToList(arr)
  return linkedList
}
