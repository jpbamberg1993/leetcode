namespace AddTwoNumbers
{
    public class ListNode {
        public int val;
        public ListNode next;
       
        public ListNode(int val=0, ListNode next=null) {
            this.val = val;
            this.next = next;
        }

        public bool Equals(ListNode other)
        {
            var l1 = this;
            var l2 = other;

            while (l1 != null || l2 != null)
            {
                if (l1 == null || l2 == null)
                {
                    return false;
                }

                if (l1.val != l2.val)
                {
                    return false;
                }

                l1 = l1.next;
                l2 = l2.next;
            }

            return true;
        }
    }
}