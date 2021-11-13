using System;

namespace LongestSubstring
{
    public static class LongestSubstringService
    {
        public static int LengthOfLongestSubstring(string s)
        {
            var longestSubString = 0;
            var startIndex = 0;
            var endIndex = 0;

            while (endIndex < s.Length)
            {
                if (startIndex == endIndex)
                {
                    endIndex += 1;
                    continue;
                }

                var indexOfPreviousChar = s.IndexOf(s[endIndex], startIndex, endIndex - startIndex);
                if (indexOfPreviousChar != -1)
                {
                    var diff = endIndex - startIndex;
                    longestSubString = Math.Max(diff, longestSubString);
                    startIndex = indexOfPreviousChar  + 1;
                }

                endIndex += 1;
            }

            return Math.Max(longestSubString, endIndex - startIndex);
        }
    }
}