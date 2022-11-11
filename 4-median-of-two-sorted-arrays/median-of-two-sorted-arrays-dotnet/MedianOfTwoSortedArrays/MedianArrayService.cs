namespace MedianOfTwoSortedArrays;

public class MedianArrayService
{
    public double FindMedian(int[] nums1, int[] nums2)
    {
        var a = nums1;
        var b = nums2;
        if (a.Length > b.Length)
        {
            (a, b) = (b, a);
        }

        var total = a.Length + b.Length;
        var half = total / 2;
        var start = 0;
        var end = a.Length - 1;
        while (true)
        {
            var i = (int)Math.Floor((start + end) / 2.0);
            var j = half - i - 2;

            var aLeft = i >= 0 ? nums1[i] : int.MinValue;
            var aRight = i + 1 < nums1.Length ? nums1[i + 1] : int.MaxValue;
            var bLeft = j >= 0 ? nums2[j] : int.MinValue;
            var bRight = j + 1 < nums2.Length ? nums2[j + 1] : int.MaxValue;

            if (aLeft <= bRight && bLeft <= aRight)
            {
                if (total % 2 == 0)
                {
                    return (Math.Max(aLeft, bLeft) + Math.Min(aRight, bRight)) / 2.0d;
                }

                return Math.Min(aRight, bRight);
            }

            if (aLeft > bRight)
            {
                end--;
            }
            else
            {
                start++;
            }
        }
    }
}