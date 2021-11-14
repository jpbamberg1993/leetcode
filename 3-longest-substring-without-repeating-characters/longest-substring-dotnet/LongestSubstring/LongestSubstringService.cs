using System;

namespace LongestSubstring
{
    public static class LongestSubstringService
    {
        public static int LengthOfLongestSubstring(string s)
        {
            var chars = new int[128];
            var sArr = s.ToCharArray();
            
            var left = 0;
            var right = 0;

            var res = 0;
            while (right < s.Length)
            {
                chars[sArr[right]] += 1;

                while (chars[sArr[right]] > 1)
                {
                    var l = sArr[left];
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