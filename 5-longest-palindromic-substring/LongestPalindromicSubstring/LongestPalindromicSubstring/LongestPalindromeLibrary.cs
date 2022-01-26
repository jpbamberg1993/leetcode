namespace LongestPalindromicSubstring;

public static class LongestPalindromeLibrary
{
    public static string LongestPalindrome(string s)
    {
        var longestPalindrome = "";
        
        for (int i = 0; i < s.Length; i++)
        {
            for (int j = i; j < s.Length; j++)
            {
                var subString = s.Substring(i, j - i + 1).ToCharArray();
                if (subString.SequenceEqual(subString.Reverse()) && subString.Length > longestPalindrome.Length)
                {
                    longestPalindrome = new string(subString);
                }
            }
        }

        return longestPalindrome;
    }
}