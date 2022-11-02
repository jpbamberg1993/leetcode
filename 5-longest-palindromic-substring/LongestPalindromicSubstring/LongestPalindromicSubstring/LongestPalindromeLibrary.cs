namespace LongestPalindromicSubstring;

public static class LongestPalindromeLibrary
{
    public static string LongestPalindrome(string s)
    {
        if (s.Length <= 1) return s;
        
        var start = 0;
        var end = 0;
        for (var i = 0; i < s.Length; i++)
        {
            var length1 = ExpandAroundCenter(s, i, i);
            var length2 = ExpandAroundCenter(s, i, i + 1);
            var length = Math.Max(length1, length2);
            if (length > end - start)
            {
                start = i - (length - 1) / 2;
                end = i + length / 2;
            }
        }

        return s.Substring(start, end - start + 1);
    }

    private static int ExpandAroundCenter(string s, int startingIndex, int endingIndex)
    {
        var left = startingIndex;
        var right = endingIndex;
        while (left >= 0 && right < s.Length && s[left] == s[right])
        {
            left--;
            right++;
        }

        return right - left - 1;
    }
}