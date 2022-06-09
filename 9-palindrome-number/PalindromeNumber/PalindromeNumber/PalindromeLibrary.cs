namespace PalindromeNumber;

public class PalindromeLibrary
{
    public bool IsPalindrome(int x)
    {
        if (x < 0 || (x % 10 == 0 && x != 0))
        {
            return false;
        }

        var reversedNumber = 0;
        while (x > reversedNumber)
        {
            reversedNumber = reversedNumber * 10 + x % 10;
            x /= 10;
        }

        return x == reversedNumber || x == reversedNumber / 10;
    }
}
