namespace LongestPalindromicSubstring;

public static class LongestPalindromeLibrary
{
    public static string LongestPalindrome(string s)
    {
        if (s.Length <= 1)
        {
            return s;
        }

        var startingIndex = 0;
        var longestLength = 1;
        var sLength = s.Length;
        var palindromeDictionary = new bool[sLength,sLength];

        for (var i = 0; i < sLength; i++)
        {
            palindromeDictionary[i, i] = true;
        }

        for (var i = 0; i < sLength - 1; ++i)
        {
            if (s[i] == s[i + 1])
            {
                if (longestLength < 2)
                {
                    longestLength = 2;
                    startingIndex = i;
                }

                palindromeDictionary[i, i + 1] = true;
            }
            else
            {
                palindromeDictionary[i, i + 1] = false;
            }
        }

        for (var k = 3; k < sLength + 1; ++k)
        {
            for (var i = 0; i < sLength - k + 1; ++i)
            {
                var j = i + k - 1;

                if (palindromeDictionary[i + 1, j - 1] && s[i] == s[j])
                {
                    if (k > longestLength)
                    {
                        longestLength = k;
                        startingIndex = i;
                    }

                    palindromeDictionary[i, j] = true;
                }
                else
                {
                    palindromeDictionary[i, j] = false;
                }
            }
        }
        
        return s.Substring(startingIndex, longestLength);
    }
}