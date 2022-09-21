namespace StringToInteger;

public static class ConvertString
{
    public static int MyAtoi(string s)
    {
        var stateMachine = new StateMachine();
        for (var i = 0; i < s.Length && stateMachine.GetState() != State.Qd; i++)
        {
            stateMachine.Transition(s[i]);
        }

        return stateMachine.GetResult();
    }
}

public class StateMachine
{
    private State _currentState;
    private int _result;
    private int _sign;

    public StateMachine()
    {
        _currentState = State.Q0;
        _result = 0;
        _sign = 1;
    }

    public State GetState()
    {
        return _currentState;
    }

    public int GetResult()
    {
        return _result * _sign;
    }
    
    public void Transition(char ch)
    {
        if (_currentState == State.Q0)
        {
            if (ch == ' ')
                return;
            else if (ch is '-' or '+')
                ToStateQ1(ch);
            else if (char.IsDigit(ch))
                ToStateQ2(ch - '0');
            else
                ToStateQd();
        }
        else if (_currentState is State.Q1 or State.Q2)
        {
            if (char.IsDigit(ch))
                ToStateQ2(ch - '0');
            else
                ToStateQd();
        }
    }

    private void ToStateQ1(char ch)
    {
        _sign = (ch == '-') ? -1 : 1;
        _currentState = State.Q1;
    }
    
    private void ToStateQ2(int digit)
    {
        _currentState = State.Q2;
        AppendDigit(digit);
    }

    private void ToStateQd()
    {
        _currentState = State.Qd;
    }
    
    private void AppendDigit(int digit)
    {
        if (_result > int.MaxValue / 10 || (_result == int.MaxValue / 10 && digit > int.MaxValue % 10))
        {
            if (_sign == 1)
            {
                _result = int.MaxValue;
            }
            else
            {
                _result = int.MinValue;
                _sign = 1;
            }
            _currentState = State.Qd;
        }
        else
        {
            _result = _result * 10 + digit;
        }
    }
}

public enum State
{
    Q0,
    Q1,
    Q2,
    Qd
}