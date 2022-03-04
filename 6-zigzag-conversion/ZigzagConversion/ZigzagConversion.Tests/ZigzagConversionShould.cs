using NUnit.Framework;

namespace ZigzagConversion.Tests;

public class ZigzagConversionShould
{
    [Test]
    public void Convert_Input_PAYPALISHIRING_Return_PAHNAPLSIIGYIR()
    {
        const string s = "PAYPALISHIRING";
        const int numRows = 3;

        var result = ZigzagConversion.Convert(s, numRows);

        Assert.That(result, Is.EqualTo("PAHNAPLSIIGYIR"));
    }

    [Test]
    public void Convert_Input_PAYPALISHIRING_Return_PINALSIGYAHRPI()
    {
        const string s = "PAYPALISHIRING";
        const int numRows = 4;

        var result = ZigzagConversion.Convert(s, numRows);

        Assert.That(result, Is.EqualTo("PINALSIGYAHRPI"));
    }

    [Test]
    public void Convert_Input_AB_1_Return_AB()
    {
        const string s = "AB";
        const int numRows = 1;

        var result = ZigzagConversion.Convert(s, numRows);
        
        Assert.That(result, Is.EqualTo("AB"));
    }
    
    [Test]
    public void Convert_Input_AB_3_Return_AB()
    {
        const string s = "AB";
        const int numRows = 3;

        var result = ZigzagConversion.Convert(s, numRows);
        
        Assert.That(result, Is.EqualTo("AB"));
    }

    [Test]
    public void Convert_Input_A_2_Return_A()
    {
        const string s = "A";
        const int numRows = 2;

        var result = ZigzagConversion.Convert(s, numRows);
        
        Assert.That(result, Is.EqualTo("A"));
    }
}