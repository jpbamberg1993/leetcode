using System;
using Xunit;

namespace RegularExpressionMatching.Tests;

public class RegularExpressionMatchingLibShould : IDisposable
{
    private RegularExpressionMatchingLib _regularExpressionMatching;

    public RegularExpressionMatchingLibShould()
    {
        _regularExpressionMatching = new RegularExpressionMatchingLib();
    }

    [Fact]
    public void IsMatch_Input_aa_p_Returns_false()
    {
        var result = _regularExpressionMatching.IsMatch("aa", "a");
        Assert.False(result);
    }

    [Fact]
    public void IsMatch_Input_aa_a_asterisk_Returns_true()
    {
        var result = _regularExpressionMatching.IsMatch("aa", "a*");
        Assert.True(result);
    }

    [Fact]
    public void IsMatch_Input_ab_dot_star_Returns_true()
    {
        var result = _regularExpressionMatching.IsMatch("ab", ".*");
        Assert.True(result);
    }

    [Fact]
    public void IsMatch_Input_aab_c_star_a_star_b_Returns_true()
    {
        var result = _regularExpressionMatching.IsMatch("aab", "c*a*b");
        Assert.True(result);
    }

    [Fact]
    public void IsMatch_Input_c_star_And_c_c_Returns_true()
    {
        var result = _regularExpressionMatching.IsMatch("ccccccccc", "c*");
        Assert.True(result);
    }

    public void Dispose()
    {
        _regularExpressionMatching = null;
    }
}
