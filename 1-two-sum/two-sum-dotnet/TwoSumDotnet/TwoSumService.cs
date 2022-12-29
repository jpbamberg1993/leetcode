using System;
using System.Collections.Generic;

namespace TwoSumDotnet;

public class TwoSumService
{
  public int[] TwoSum(int[] nums, int target)
  {
    var valueIndexDict = new Dictionary<int, int>();

    for (var i = 0; i < nums.Length; i++) {
      var remainder = target - nums[i];

      if (valueIndexDict.ContainsKey(remainder))
      {
        return new int[] { valueIndexDict[remainder], i };
      }

      valueIndexDict.TryAdd(nums[i], i);
    }

    return Array.Empty<int>();
  }
}
