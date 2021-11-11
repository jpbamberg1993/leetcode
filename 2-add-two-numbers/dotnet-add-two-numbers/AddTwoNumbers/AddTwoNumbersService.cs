namespace AddTwoNumbers
{
    public class AddTwoNumbersService
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            var head = new ListNode();
            var current = head;
            var remainder = 0;
            
            while (l1 != null || l2 != null)
            {
                var x = l1?.val ?? 0;
                var y = l2?.val ?? 0;
                var sum = x + y + remainder;
                
                current.next = new ListNode(sum % 10);
                current = current.next;
                remainder = sum >= 10 ? 1 : 0;

                l1 = l1?.next;
                l2 = l2?.next;
            }

            if (remainder > 0)
            {
                current.next = new ListNode(remainder);
            }

            return head.next;
        }
    }
}