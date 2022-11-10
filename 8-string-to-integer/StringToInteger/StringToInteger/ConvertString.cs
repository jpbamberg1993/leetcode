namespace StringToInteger;

public static class ConvertString
{
    public static int MyAtoi(string s)
    {
        var stateMachine = new StateMachine();
        for (var i = 0; i < s.Length && stateMachine.CurrentState != State.Qd; i++)
        {
            stateMachine.Transition(s[i]);
        }

        return stateMachine.Value;
    }
}

public class StateMachine
{
    private int _leadingSymbol = 1;
    private int _currentValue = 0;

    public State CurrentState { get; private set; } = State.Q0;

    public int Value => _currentValue * _leadingSymbol;

    public void Transition(char ch)
    {
        if (CurrentState == State.Q0)
        {
            if (ch == ' ')
            {
                return;
            }
            else if (ch is '+' or '-')
            {
                ToStateQ1(ch);
            }
            else if (char.IsDigit(ch))
            {
                ToStateQ2(ch);
            }
            else
            {
                ToStateQd();
            }
        }
        else
        {
            if (char.IsDigit(ch))
            {
                ToStateQ2(ch);
            }
            else
            {
                ToStateQd();
            }
        }
    }

    private void ToStateQd()
    {
        CurrentState = State.Qd;
    }

    private void ToStateQ2(char ch)
    {
        var digit = ch - '0';
        CurrentState = State.Q2;
        AppendDigit(digit);
    }

    private void AppendDigit(int digit)
    {
        if (_currentValue > int.MaxValue / 10 || (_currentValue == int.MaxValue / 10 && digit > 7))
        {
            _currentValue = _leadingSymbol < 0 ? int.MinValue : int.MaxValue;
            _leadingSymbol = 1;
            CurrentState = State.Qd;
            return;
        }
        
        _currentValue = _currentValue * 10 + digit;
    }

    private void ToStateQ1(char ch)
    {
        if (ch == '-')
        {
            _leadingSymbol = -1;
        }

        CurrentState = State.Q1;
    }
}

public enum State
{
    Q0,
    Q1,
    Q2,
    Qd,
}