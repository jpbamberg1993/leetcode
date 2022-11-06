namespace AddTwoNumbers;

public class AddTwoNumbersService
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        var carry = 0;
        var result = new ListNode(0);
        var current = result;
        while (l1 != null || l2 != null || carry != 0)
        {
            var val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = val >= 10 ? 1 : 0;
            current.next = new ListNode(val % 10);
            current = current.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }
        
        return result.next;
    }
}
