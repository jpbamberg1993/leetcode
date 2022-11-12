namespace AddTwoNumbers;

public class AddTwoNumbersService
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        var dummyHead = new ListNode(0);
        var currentHead = dummyHead;
        var carry = 0;
        while (l1 != null || l2 != null || carry != 0)
        {
            var value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = value >= 10 ? 1 : 0;
            currentHead.next = new ListNode(value % 10);
            currentHead = currentHead.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }

        return dummyHead.next;
    }
}