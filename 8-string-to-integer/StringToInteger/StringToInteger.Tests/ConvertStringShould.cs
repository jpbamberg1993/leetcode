using Xunit;

namespace StringToInteger.Tests;

public class ConvertStringShould
{
    [Fact]
    public void MyAtoi_Input_s42_returns_42()
    {
        const string s = "42";
        var result = ConvertString.MyAtoi(s);
        Assert.Equal(42, result);
    }
    
    [Fact]
    public void MyAtoi_Input_space_neg42_Return_neg42()
    {
        const string s = "    -42";
        var result = ConvertString.MyAtoi(s);
        Assert.Equal(-42, result);
    }
    
    [Fact]
    public void MyAtoi_Input_4193_with_words_Return_4193()
    {
        const string s = "4193 with words";
        var result = ConvertString.MyAtoi(s);
        Assert.Equal(4193, result);
    }

    [Fact]
    public void MyAtoi_Input_words_and_987_Return_987()
    {
        const string s = "words and 987";
        var result = ConvertString.MyAtoi(s);
        Assert.Equal(0, result);
    }
}