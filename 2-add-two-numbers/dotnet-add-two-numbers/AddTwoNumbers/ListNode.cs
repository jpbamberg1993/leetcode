// ReSharper disable MemberCanBePrivate.Global
// ReSharper disable InconsistentNaming

namespace AddTwoNumbers;

public class ListNode
{
    public int val;
    public ListNode next;

    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }

    public bool Equals(ListNode otherNode)
    {
        var thisNode = this;

        while (thisNode != null || otherNode != null)
        {
            if (thisNode == null || otherNode == null) return false;

            if (thisNode.val != otherNode.val) return false;

            thisNode = thisNode?.next;
            otherNode = otherNode?.next;
        }

        return true;
    }
}