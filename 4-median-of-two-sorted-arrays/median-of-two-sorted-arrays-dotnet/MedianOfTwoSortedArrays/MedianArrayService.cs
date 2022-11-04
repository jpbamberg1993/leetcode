namespace MedianOfTwoSortedArrays;

public class MedianArrayService
{
    public double FindMedian(int[] nums1, int[] nums2)
    {
        var a = nums1;
        var b = nums2;

        if (a.Length > b.Length) (a, b) = (b, a);

        var half = (a.Length + b.Length) / 2;
        var start = 0;
        var end = a.Length - 1;
        while (true)
        {
            var i = (int)Math.Floor((end + start) / 2d);
            var j = half - i - 2;

            var l1Left = i >= 0 ? a[i] : int.MinValue;
            var l1Right = i + 1 < a.Length ? a[i + 1] : int.MaxValue;
            var l2Left = j >= 0 ? b[j] : int.MinValue;
            var l2Right = j + 1 < b.Length ? b[j + 1] : int.MaxValue;
            
            if (l1Left <= l2Right && l2Left <= l1Right)
            {
                if ((a.Length + b.Length) % 2 == 0)
                {
                    return (Math.Max(l1Left, l2Left) + Math.Min(l1Right, l2Right)) / 2.0;
                }

                return Math.Min(l1Right, l2Right);
            }
            
            if (l1Left > l2Right)
                end--;
            else
                end++;
        }
    }
}