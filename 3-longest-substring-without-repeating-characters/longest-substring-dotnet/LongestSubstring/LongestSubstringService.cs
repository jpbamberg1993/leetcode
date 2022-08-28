using System;
using System.Collections.Generic;

namespace LongestSubstring;

public static class LongestSubstringService
{
    public static int LengthOfLongestSubstring(string s)
    {
        var chars = new Dictionary<char, int>();

        var left = 0;
        var right = 0;

        var response = 0;
        while (right < s.Length)
        {
            var r = s[right];
            chars[s[right]] = chars.GetValueOrDefault(r, 0) + 1;

            while (chars[r] > 1)
            {
                var l = s[left];
                chars[l] -= 1;
                left++;
            }

            response = Math.Max(right - left + 1, response);
            right++;
        }
        
        return response;
    }
}