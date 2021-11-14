using System;
using System.Collections.Generic;

namespace LongestSubstring
{
    public static class LongestSubstringService
    {
        public static int LengthOfLongestSubstring(string s)
        {
            var charactersIndex = new Dictionary<int, int>();

            var response = 0;
            var leftIndex = 0;
            for (var rightIndex = 0; rightIndex < s.Length; rightIndex++)
            {
                var rightCharacter = s[rightIndex];
                if (charactersIndex.ContainsKey(rightCharacter))
                {
                    var charactersRightIndex = charactersIndex[rightCharacter];
                    leftIndex = Math.Max(charactersRightIndex, leftIndex);
                }

                response = Math.Max(response, rightIndex - leftIndex + 1);
                charactersIndex[rightCharacter] = rightIndex + 1;
            }

            return response;
        }
    }
}