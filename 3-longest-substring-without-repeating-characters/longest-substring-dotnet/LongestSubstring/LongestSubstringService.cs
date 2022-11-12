using System;
using System.Collections.Generic;

namespace LongestSubstring;

public static class LongestSubstringService
{
    public static int LengthOfLongestSubstring(string s)
    {
        if (s.Length < 1) return 0;
        
        var chars = new Dictionary<char, int>();

        var maxLength = 0;
        var start = 0;
        var end = 0;

        while (end < s.Length)
        {
            var r = s[end];
            
            chars[r] = chars.GetValueOrDefault(r, 0) + 1;

            while (chars[r] > 1)
            {
                chars[s[start]] -= 1;
                start++;
            }

            maxLength = Math.Max(maxLength, end - start + 1);
            end++;
        }

        return maxLength;
    }
}