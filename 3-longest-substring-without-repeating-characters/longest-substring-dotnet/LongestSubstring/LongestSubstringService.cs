using System;

namespace LongestSubstring
{
    public static class LongestSubstringService
    {
        public static int LengthOfLongestSubstring(string s)
        {
            var chars = new int[128];
            
            var left = 0;
            var right = 0;

            var res = 0;
            while (right < s.Length)
            {
                var r = s[right];
                chars[r] += 1;

                while (chars[r] > 1)
                {
                    var l = s[left];
                    chars[l]--;
                    left++;
                }

                res = Math.Max(res, right - left + 1);
                
                right++;
            }

            return res;
        }
    }
}