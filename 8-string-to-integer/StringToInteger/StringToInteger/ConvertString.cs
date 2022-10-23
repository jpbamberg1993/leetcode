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

        return stateMachine.Result;
    }
}

public class StateMachine
{
    private int _result;
    private State _currentState;
    private int _symbol;

    public StateMachine()
    {
        _result = 0;
        _currentState = State.Q0;
        _symbol = 1;
    }

    public State CurrentState => _currentState;
    public int Result => _result * _symbol;

    public void Transition(char ch)
    {
        if (_currentState == State.Q0)
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
        _currentState = State.Qd;
    }

    private void ToStateQ2(char ch)
    {
        var value = ch - '0';
        _currentState = State.Q2;
        AppendDigit(value);
    }

    private void AppendDigit(int value)
    {
        if (_result > int.MaxValue / 10 || (_result == int.MaxValue / 10 && value > int.MaxValue % 10))
        {
            if (_symbol > 0)
            {
                _result = int.MaxValue;
            }
            else
            {
                _result = int.MinValue;
                _symbol = 1;
            }

            ToStateQd();
        }
        else
        {
            _result = _result * 10 + value;
        }
    }

    public void ToStateQ1(char ch)
    {
        if (ch == '-') _symbol = -1;
        _currentState = State.Q1;
    }
}

public enum State
{
    Q0,
    Q1,
    Q2,
    Qd,
}