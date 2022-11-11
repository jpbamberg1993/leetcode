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
            var length1 = GetLength(s, i, i);
            var length2 = GetLength(s, i, i + 1);
            var length = Math.Max(length1, length2);
            if (length > end - start)
            {
                start = i - ((length - 1) / 2);
                end = i + (length / 2);
            }
        }

        return s.Substring(start, end - start + 1);
    }

    private static int GetLength(string s, int i, int j)
    {
        var start = i;
        var end = j;
        while (start >= 0 && end < s.Length && s[start] == s[end])
        {
            start--;
            end++;
        }

        return end - start - 1;
    }
    
}