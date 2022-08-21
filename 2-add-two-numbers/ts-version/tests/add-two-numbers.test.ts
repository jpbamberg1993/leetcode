import { addTwoNumbers } from '../src/add-two-numbers';
import { ListNode } from '../src/list-node';

describe('addTwoNumbers', function() {
  it('add two numbers as linked lists', function() {
    const headNode1 = generateLinkedList([2,4,3])
    const headNode2 = generateLinkedList([5,6,4])
    const expectedResult = generateLinkedList([7,0,8])
    const falseResult = generateLinkedList([7,0,9])

    const result = addTwoNumbers(headNode1, headNode2)

    expect(result).toStrictEqual(expectedResult)
    expect(result).not.toStrictEqual(falseResult)
  })

  it('adds linked lists with only 1 value each', function() {
    const linkedList1 = generateLinkedList([0])
    const linkedList2 = generateLinkedList([0])
    const expectedResult = generateLinkedList([0])

    const result = addTwoNumbers(linkedList1, linkedList2)

    expect(result).toStrictEqual(expectedResult)
  })

  it('adds differently sized linked lists', function() {
    const linkedList1 = generateLinkedList([9,9,9,9,9,9,9])
    const linkedList2 = generateLinkedList([9,9,9,9])
    const expectedResult = generateLinkedList([8,9,9,9,0,0,0,1])

    const result = addTwoNumbers(linkedList1, linkedList2)

    expect(result).toStrictEqual(expectedResult)
  })

  it('sum has extra carry at the end', function() {
    const linkedList1 = generateLinkedList([3, 7])
    const linkedList2 = generateLinkedList([9, 2])
    const expectedResult = generateLinkedList([2, 0, 1])

    const result = addTwoNumbers(linkedList1, linkedList2)

    expect(result).toStrictEqual(expectedResult)  
  })
})

function generateLinkedList(arr: number[]): ListNode {
  const dummyHead = new ListNode(0)
  let currentNode = dummyHead
  for (const number of arr) {
    currentNode.next = new ListNode(number)
    currentNode = currentNode.next
  }
  return dummyHead.next
}
