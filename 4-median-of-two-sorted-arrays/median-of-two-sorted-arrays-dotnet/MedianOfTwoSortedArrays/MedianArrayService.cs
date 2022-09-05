namespace MedianOfTwoSortedArrays;

public class MedianArrayService
{
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        var a = nums1;
        var b = nums2;

        if (a.Length > b.Length)
        {
            (a, b) = (b, a);
        }

        var total = a.Length + b.Length;
        var half = total / 2;
        var l = 0;
        var r = a.Length - 1;

        while (true)
        {
            var i = (int)Math.Floor((r + l) / 2.0);
            var j = half - i - 2;
            var aLeft = i >= 0 ? a[i] : int.MinValue;
            var aRight = i + 1 < a.Length ? a[i + 1] : int.MaxValue;
            var bLeft = j >= 0 ? b[j] : int.MinValue;
            var bRight = j + 1 < b.Length ? b[j + 1] : int.MaxValue;

            if (aLeft <= bRight && bLeft <= aRight)
            {
                if (total % 2 == 1)
                {
                    return Math.Min(aRight, bRight);
                }

                return (Math.Max(aLeft, bLeft) + Math.Min(aRight, bRight)) / 2.0;
            }

            if (aLeft > bRight)
            {
                r = i - 1;
            }
            else
            {
                l = i + 1;
            }
        }
    }
}