using System;
using NUnit.Framework;

namespace MedianOfTwoSortedArrays.Tests;

public class MedianArrayServiceShould
{
    private MedianArrayService _medianArrayService;

    [SetUp]
    public void SetUp()
    {
        _medianArrayService = new MedianArrayService();
    }

    [Test]
    public void FindMedianSortedArrays_InputThreeNumbers_ReturnTwo()
    {
        var nums1 = new[] {1, 3};
        var nums2 = new[] {2};

        var median = _medianArrayService.FindMedianSortedArrays(nums1, nums2);

        const double expectedMedian = 2.0000;
        
        Assert.AreEqual(expectedMedian, median);
    }

    [Test]
    public void FindMedianSortedArrays_InputEvenNumbers_ReturnTwoPointFive()
    {
        var nums1 = new[] {1, 2};
        var nums2 = new[] {3,4};

        var median = _medianArrayService.FindMedianSortedArrays(nums1, nums2);

        const double expectedMedian = 2.5000;

        Assert.AreEqual(expectedMedian, median);
    }

    [Test]
    public void FindMedianSortedArrays_InputEvenZeros_ReturnZero()
    {
        var nums1 = new[] {0, 0};
        var nums2 = new[] {0, 0};

        var median = _medianArrayService.FindMedianSortedArrays(nums1, nums2);

        const double expectedMedian = 0.0000;

        Assert.AreEqual(expectedMedian, median);
    }

    [Test]
    public void FindMedianSortedArrays_InputOneEmptyArray_ReturnTwo()
    {
        var nums1 = new[] {2};
        var nums2 = Array.Empty<int>();

        var median = _medianArrayService.FindMedianSortedArrays(nums1, nums2);

        const double expectedMedian = 2.0000;

        Assert.AreEqual(expectedMedian, median);
    }
}