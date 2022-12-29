namespace AddTwoNumbers;

public class AddTwoNumbersService
{
  public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
  {
    var currentHead = new ListNode(0);
    var dummyHead = currentHead;
    var carry = 0;
    while (l1 != null || l2 != null || carry != 0)
    {
      var val1 = l1?.val ?? 0;
      var val2 = l2?.val ?? 0;
      var val = val1 + val2 + carry;
      currentHead.next = new ListNode(val % 10);
      currentHead = currentHead.next;
      carry = val > 9 ? 1 : 0;
      l1 = l1?.next;
      l2 = l2?.next;
    }

    return dummyHead.next;
  }
}
