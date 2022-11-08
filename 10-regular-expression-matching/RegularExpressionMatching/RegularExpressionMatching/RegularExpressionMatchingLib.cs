namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    private Result[,] _results;

    public bool IsMatch(string s, string p)
    {
        _results = new Result[s.Length + 1, p.Length + 1];
        return IsMatch(s, p, 0, 0);
    }

    private bool IsMatch(string s, string p, int i, int j)
    {
        if (_results[i, j] != Result.Undefined) return _results[i, j] == Result.True;

        if (j >= p.Length) return i >= s.Length;

        var firstMatch = i < s.Length && (s[i] == p[j] || p[j] == '.');
        bool result;
        if (j + 1 < p.Length && p[j + 1] == '*')
        {
            result = IsMatch(s, p, i, j + 2) || (firstMatch && IsMatch(s, p, i + 1, j));
        }
        else
        {
            result = firstMatch && IsMatch(s, p, i + 1, j + 1);
        }

        _results[i, j] = result ? Result.True : Result.False;
        return result;
    }
}

public enum Result
{
    Undefined,
    True,
    False,
}