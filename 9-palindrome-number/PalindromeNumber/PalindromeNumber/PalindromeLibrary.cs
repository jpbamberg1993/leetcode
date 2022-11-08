namespace PalindromeNumber;

public class PalindromeLibrary
{
    public bool IsPalindrome(int x)
    {
        if (x < 0) return false;

        var temp = x;
        var reversed = 0;
        while (temp != 0)
        {
            var pop = temp % 10;
            reversed = reversed * 10 + pop;
            temp /= 10;
        }

        return reversed == x;
    }
}