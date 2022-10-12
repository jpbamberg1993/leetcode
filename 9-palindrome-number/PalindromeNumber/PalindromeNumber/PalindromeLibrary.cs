public class PalindromeLibrary
{
    public bool IsPalindrome(int x)
    {
        if (x < 0) return false;

        var original = x;
        var reversed = 0;

        while (x > 0)
        {
            var pop = x % 10;
            reversed = reversed * 10 + pop;
            x /= 10;
        }

        return original == reversed;
    }
}