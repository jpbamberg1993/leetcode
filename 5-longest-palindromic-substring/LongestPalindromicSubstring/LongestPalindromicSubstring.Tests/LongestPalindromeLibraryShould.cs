using NUnit.Framework;

namespace LongestPalindromicSubstring.Tests;

public class LongestPalindromeLibraryShould
{
    [Test]
    public void LongestPalindrome_Input_babad_Return_bab()
    {
        const string s = "babad";

        var result = LongestPalindromeLibrary.LongestPalindrome(s);
        
        Assert.That(result, Is.AnyOf("bab", "aba"));
    }
    
    [Test]
    public void LongestPalindrome_Input_cbbd_Return_bb()
    {
        const string s = "cbbd";

        var result = LongestPalindromeLibrary.LongestPalindrome(s);
        
        Assert.That(result, Is.EqualTo("bb"));
    }

    [Test]
    public void LongestPalindrome_Input_a_Expect_a()
    {
        const string s = "a";

        var result = LongestPalindromeLibrary.LongestPalindrome(s);
        
        Assert.That(result, Is.EqualTo("a"));
    }

    [Test]
    public void LongestPalindrome_Input_ccc_Expect_ccc()
    {
        const string s = "ccc";

        var result = LongestPalindromeLibrary.LongestPalindrome(s);
        
        Assert.That(result, Is.EqualTo("ccc"));
    }
}