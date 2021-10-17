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
                    return new[] {dict[remainder], i};
                }

                dict.Add(nums[i], i);
            }

            throw new ArgumentException("Now two nums provided equaled the target");
        } 
    }
}
