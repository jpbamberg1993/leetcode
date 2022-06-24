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

    [Fact]
    public void IsMatch_Input_aab_c_star_a_star_b_Returns_true()
    {
        var result = RegularExpressionMatchingLib.IsMatch("aab", "c*a*b");
        Assert.True(result);
    }

    [Fact]
    public void IsMatch_Input_c_star_And_c_c_Returns_true()
    {
        var result = RegularExpressionMatchingLib.IsMatch("ccccccccc", "c*");
        Assert.True(result);
    }
}
