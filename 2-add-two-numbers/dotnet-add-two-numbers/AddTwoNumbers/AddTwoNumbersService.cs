namespace AddTwoNumbers;

public class AddTwoNumbersService
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        var dummyHead = new ListNode(0);
        var currentHead = dummyHead;
        var carryOver = 0;
        
        while (l1 != null || l2 != null || carryOver != 0)
        {
            var firstValue = l1?.val ?? 0;
            var secondValue = l2?.val ?? 0;
            var sum = firstValue + secondValue + carryOver;
            carryOver = sum >= 10 ? 1 : 0;
            currentHead.next = new ListNode(sum % 10);
            currentHead = currentHead.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }

        return dummyHead.next;
    }
}