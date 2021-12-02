namespace MedianOfTwoSortedArrays;

public class MedianArrayService
{
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        var nums = nums1.Concat(nums2).ToArray();
        Array.Sort(nums);

        var numsLength = nums.Length;
        var lengthIsEven = numsLength % 2 == 0;

        if (lengthIsEven)
        {
            var firstIndex = numsLength / 2 - 1;
            var firstNum = nums[firstIndex];
            var secondNum = nums[firstIndex + 1];
            
            var result = (firstNum + secondNum) / 2.0;
            return result;
        }

        var middleIndex = (int)Math.Ceiling(numsLength / 2.0) - 1;

        return nums[middleIndex];
    }
}