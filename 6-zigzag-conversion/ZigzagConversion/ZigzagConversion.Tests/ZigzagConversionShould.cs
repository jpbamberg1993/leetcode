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
}