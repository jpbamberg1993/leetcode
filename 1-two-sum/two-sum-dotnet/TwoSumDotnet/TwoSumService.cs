using System;
using System.Collections.Generic;

namespace TwoSumDotnet;

public class TwoSumService
{
    public int[] TwoSum(int[] nums, int target)
    {
        var dict = new Dictionary<int, int>();
        for (var i = 0; i < nums.Length; i++)
        {
            var value = nums[i];
            var remainder = target - value;
            
            if (dict.ContainsKey(remainder)) return new[] { dict[remainder], i };

            dict[value] = i;
        }

        return Array.Empty<int>();
    }
}