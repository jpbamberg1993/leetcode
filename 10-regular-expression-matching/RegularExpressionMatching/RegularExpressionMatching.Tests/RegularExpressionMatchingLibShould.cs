using Xunit;

namespace RegularExpressionMatching.Tests;

public class RegularExpressionMatchingLibShould
{
    [Fact]
    public void IsMatch_Input_aa_p_Returns_false()
    {
        var result = RegularExpressionMatchingLib.IsMatch("aa", "a");
        Assert.False(result);
    }

    [Fact]
    public void IsMatch_Input_aa_a_asterisk_Returns_true()
    {
        var result = RegularExpressionMatchingLib.IsMatch("aa", "a*");
        Assert.True(result);
    }

    [Fact]
    public void IsMatch_Input_ab_dot_star_Returns_true()
    {
        var result = RegularExpressionMatchingLib.IsMatch("ab", ".*");
        Assert.True(result);
    }
}
