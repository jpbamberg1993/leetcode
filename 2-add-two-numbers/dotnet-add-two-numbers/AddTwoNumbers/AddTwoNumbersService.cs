namespace AddTwoNumbers
{
    public class AddTwoNumbersService
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            ListNode head = null;
            ListNode current = null;

            var remainder = 0;
            while (l1 != null || l2 != null)
            {
                var sum = (l1?.val ?? 0) + (l2?.val ?? 0) + remainder;
                remainder = sum >= 10 ? 1 : 0;
                sum %= 10;
                var node = new ListNode
                {
                    val = sum
                };

                if (head == null || current == null)
                {
                    head = node;
                    current = node;
                }
                else
                {
                    current.next = node;
                    current = current.next;
                }

                l1 = l1?.next;
                l2 = l2?.next;
            }

            if (remainder > 0)
            {
                current.next = new ListNode(remainder);
            }

            return head;
        }
    }
}