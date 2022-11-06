using System;
using System.Collections.Generic;

namespace TwoSumDotnet;

public class TwoSumService
{
    private readonly Dictionary<int, int> _keyValueStore = new();

    public int[] TwoSum(int[] nums, int target)
    {
        for (var i = 0; i < nums.Length; i++)
        {
            var num = nums[i];
            var remainder = target - num;
            if (_keyValueStore.ContainsKey(remainder))
            {
                return new[] { _keyValueStore[remainder], i };
            }
            _keyValueStore[num] = i;
        }

        return Array.Empty<int>();
    }
}