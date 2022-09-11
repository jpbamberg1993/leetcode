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
        var start = 0;
        var end = a.Length - 1;
        while (true)
        {
            var i = (int)Math.Floor((end + start) / 2.0);
            var j = half - i - 2;
            var aLeft = i >= 0 ? a[i] : int.MinValue;
            var aRight = i + 1 < a.Length ? a[i + 1] : int.MaxValue;
            var bLeft = j >= 0 ? b[j] : int.MinValue;
            var bRight = j + 1 < b.Length ? b[j + 1] : int.MaxValue;

            if (aLeft <= bRight && bLeft <= aRight)
            {
                if (total % 2 == 0)
                {
                    return (Math.Max(aLeft, bLeft) + Math.Min(aRight, bRight)) / 2.0;
                }

                return Math.Min(aRight, bRight);
            }

            if (aLeft > bRight)
            {
                end = i - 1;
            }
            else
            {
                start = i + 1;
            }
        }
    }
}

