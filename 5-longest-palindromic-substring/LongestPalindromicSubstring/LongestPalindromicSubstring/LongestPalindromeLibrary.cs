namespace LongestPalindromicSubstring;

public static class LongestPalindromeLibrary
{
    public static string LongestPalindrome(string s)
    {
        var start = 0;
        var end = 0;
        for (int i = 0; i < s.Length; i++)
        {
            var lengthOne = GetLength(s, i, i);
            var lengthTwo = GetLength(s, i, i + 1);
            var length = Math.Max(lengthOne, lengthTwo);
            if (length > end - start + 1)
            {
                start = i - ((length - 1) / 2);
                end = i + (length / 2);
            }
        }

        return s.Substring(start, end - start + 1);
    }

    private static int GetLength(string s, int i, int j)
    {
        var left = i;
        var right = j;
        while (left >= 0 && right < s.Length && s[left] == s[right])
        {
            left--;
            right++;
        }

        return right - left - 1;
    }
}