using NUnit.Framework;

namespace LongestSubstring.Tests
{
    public class LongestSubstringServiceShould
    {
        [Test]
        public void LengthOfLongestSubstring_InputLongestSubStringAtStart_ReturnThree()
        {
            const string s = "abcabcbb";

            var result = LongestSubstringService.LengthOfLongestSubstring(s);
            
            Assert.AreEqual(3, result);
        }

        [Test]
        public void LengthOfLongestSubstring_InputStringWithRepeatingChars_ReturnOne()
        {
            const string s = "bbbbb";

            var result = LongestSubstringService.LengthOfLongestSubstring(s);
            
            Assert.AreEqual(1, result);
        }

        [Test]
        public void LengthOfLongestSubstring_InputStringWithLongestSubstringAtEnd_ReturnThree()
        {
            const string s = "pwwkew";

            var result = LongestSubstringService.LengthOfLongestSubstring(s);
            
            Assert.AreEqual(3, result);
        }

        [Test]
        public void LengthOfLongestSubstring_InputEmptyString_ReturnZero()
        {
            const string s = "";

            var result = LongestSubstringService.LengthOfLongestSubstring(s);
            
            Assert.AreEqual(0, result);
        }

        [Test]
        public void LengthOfLongestSubstring_InputSpace_ReturnOne()
        {
            const string s = " ";

            var result = LongestSubstringService.LengthOfLongestSubstring(s);
            
            Assert.AreEqual(1, result);
        }
    }
}