using System;
using System.Collections.Generic;

namespace TwoSumDotnet
{
    public class TwoSumService
    {
        public int[] TwoSum(int[] nums, int target)
        {
            var dict = new Dictionary<int, int>();

            for (var i = 0; i < nums.Length; i++)
            {
                var remainder = target - nums[i];

                if (dict.ContainsKey(remainder))
                {
                    return new[] { dict[remainder], i };
                }

                if (dict.ContainsKey(nums[i])) continue;

                dict.Add(nums[i], i);
            }

            return Array.Empty<int>();
        }
    }
}