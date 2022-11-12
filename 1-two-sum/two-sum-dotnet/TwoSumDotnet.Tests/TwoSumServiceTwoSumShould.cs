using NUnit.Framework;

namespace TwoSumDotnet.Tests
{
    public class TwoSumServiceTwoSumShould
    {
        private TwoSumService _twoSumService;

        [SetUp]
        public void Setup()
        {
            _twoSumService = new TwoSumService();
        }

        [Test]
        public void TwoSum_InputArrAndTarget_ReturnFirstTwoIndexes()
        {
            var nums = new[] { 2, 7, 11, 15 };
            const int target = 9;

            var result = _twoSumService.TwoSum(nums, target);

            Assert.AreEqual(new[] { 0, 1 }, result);
        }

        [Test]
        public void TwoSum_InputArrAndTarget_NotReturnLastTwoIndexes()
        {
            var nums = new[] { 2, 7, 11, 15 };
            const int target = 9;

            var result = _twoSumService.TwoSum(nums, target);

            Assert.AreNotEqual(new[] { 2, 3 }, result);
        }

        [Test]
        public void TwoSum_InputArrAndTarget_ReturnLastTwoIndexes()
        {
            var nums = new[] { 3, 2, 4 };
            const int target = 6;

            var result = _twoSumService.TwoSum(nums, target);

            Assert.AreEqual(new[] { 1, 2 }, result);
        }

        [Test]
        public void TwoSum_InputArrLengthTwoAndTarget_ReturnOnlyTwoIndexes()
        {
            var nums = new[] { 3, 3 };
            const int target = 6;

            var result = _twoSumService.TwoSum(nums, target);

            Assert.AreEqual(new[] { 0, 1 }, result);
        }

        [Test]
        public void TwoSum_InputRepeatingOnes_Return5And11()
        {
            var nums = new[] { 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1 };
            const int target = 11;

            var result = _twoSumService.TwoSum(nums, target);

            Assert.AreEqual(new[] { 5, 11 }, result);
        }
    }
}