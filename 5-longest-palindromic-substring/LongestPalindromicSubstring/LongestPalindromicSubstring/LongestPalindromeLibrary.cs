namespace LongestPalindromicSubstring;

public static class LongestPalindromeLibrary
{
    public static string LongestPalindrome(string s)
    {
        if (s.Length < 1) return "";
        var start = 0;
        var end = 0;
        for (var i = 0; i < s.Length; i++)
        {
            var lengthOne = GetLength(s, i, i);
            var lengthTwo = GetLength(s, i, i + 1);
            var maxLength = Math.Max(lengthOne, lengthTwo);
            if (maxLength > end - start)
            {
                start = i - ((maxLength - 1) / 2);
                end = i + (maxLength / 2);
            }
        }

        return s.Substring(start, (end - start) + 1);
    }

    private static int GetLength(string s, int start, int end)
    {
        var left = start;
        var right = end;
        while (left >= 0 && right < s.Length && s[left] == s[right])
        {
            left--;
            right++;
        }

        return right - left - 1;
    }
}