namespace PalindromeNumber;

public class PalindromeLibrary
{
    public bool IsPalindrome(int x)
    {
        var splitInt = x.ToString().Select(d => Convert.ToInt32(d) - 48).ToArray();
        var stack = new Stack<int>();
        foreach (var digit in splitInt)
        {
            stack.Push(digit);
        }

        foreach (var digit in splitInt)
        {
            if (digit != stack.Pop())
            {
                return false;
            }
        }
        return true;
    }
}
