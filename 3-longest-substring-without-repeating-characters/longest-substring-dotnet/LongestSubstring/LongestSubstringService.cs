using System;
using System.Collections.Generic;

namespace LongestSubstring;

public static class LongestSubstringService
{
    public static int LengthOfLongestSubstring(string s)
    {
        var chars = new Dictionary<char, int>();

        var result = 0;
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

            result = Math.Max(result, end - start + 1);
            end++;
        }

        return result;
    }
}