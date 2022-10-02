namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    private Result[,] _results;

    public bool IsMatch(string s, string p)
    {
        _results = new Result[s.Length + 1, p.Length + 1];
        return IsMatch(0, 0, s, p);
    }

    private bool IsMatch(int i, int j, string s, string p)
    {
        if (j >= p.Length) return i >= s.Length;

        if (_results[i, j] != Result.Undefined) return _results[i, j] == Result.True;

        bool answer;
        var match = i < s.Length && (s[i] == p[j] || p[j] == '.');

        if (j + 1 < p.Length && p[j + 1] == '*')
        {
            answer = (IsMatch(i, j + 2, s, p) || (match && IsMatch(i + 1, j, s, p)));
        }
        else
        {
            answer = match && IsMatch(i + 1, j + 1, s, p);
        }

        _results[i, j] = answer ? Result.True : Result.False;
        return answer;
    }
}

public enum Result
{
    Undefined,
    True,
    False,
}