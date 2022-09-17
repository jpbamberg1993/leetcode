using NUnit.Framework;

namespace ReverseInteger.Tests;

public class ReverseIntegerShould
{
    private ReverseInteger _reverseInteger = new();
    
    [SetUp]
    public void Setup()
    {
        _reverseInteger = new ReverseInteger();
    }

    [Test]
    public void Reverse_Input_123_Return_321()
    {
        var result = _reverseInteger.Reverse(123);
        Assert.AreEqual(321, result);
    }
    
    [Test]
    public void Reverse_Input_Neg123_Return_Neg321()
    {
        var result = _reverseInteger.Reverse(-123);
        Assert.AreEqual(-321, result);
    }
    
    [Test]
    public void Reverse_Input_120_Return_21()
    {
        var result = _reverseInteger.Reverse(120);
        Assert.AreEqual(21, result);
    }

    [Test]
    public void Reverse_Input_0_Return_0()
    {
        var result = _reverseInteger.Reverse(0);
        Assert.AreEqual(0, result);
    }

    [Test]
    public void Reverse_Input_1534236469_Return_0()
    {
        var result = _reverseInteger.Reverse(1534236469);
        Assert.AreEqual(0, result);
    }
}