using Xunit;

namespace PalindromeNumber.Tests;

public class PalindromeLibraryShould : IClassFixture<PalindromeLibrary>
{
    private readonly PalindromeLibrary _palindromeLibrary;

    public PalindromeLibraryShould(PalindromeLibrary palindromeLibrary)
    {
        _palindromeLibrary = palindromeLibrary;
    }
    
    [Fact]
    public void IsPalindrome_Input_121_Returns_True()
    {
        const int x = 121;
        var result = _palindromeLibrary.IsPalindrome(x);
        Assert.True(result);
    }

    [Fact]
    public void IsPalindrome_Input_Neg121_Returns_False()
    {
        const int x = -121;
        var result = _palindromeLibrary.IsPalindrome(x);
        Assert.False(result);
    }

    [Fact]
    public void IsPalindrome_Input_10_Returns_False()
    {
        const int x = 10;
        var result = _palindromeLibrary.IsPalindrome(x);
        Assert.False(result);
    }
}