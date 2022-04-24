namespace StringToInteger;

public class StateMachine
{
    private State _currentState;
    private int _result;
    private int _sign;

    public StateMachine()
    {
        _currentState = State.q0;
        _result = 0;
        _sign = 1;
    }
    
    public State GetState()
    {
        return _currentState;
    }

    public int GetResultAsInt()
    {
        return _sign * _result;
    }
    
    public void Transition(char c)
    {
        if (_currentState == State.q0)
        {
            if (c == ' ')
            {
                return;
            }
            else if (c is '-' or '+')
            {
                ToStateQ1(c);
            }
            else if (char.IsDigit(c))
            {
                ToStateQ2(c);
            }
            else
            {
                ToStateQd();
            }
        }
        else if (_currentState is State.q1 or State.q2)
        {
            if (char.IsDigit(c))
            {
                ToStateQ2(c);
            }
            else
            {
                ToStateQd();
            }
        }
    }

    private void ToStateQ1(char c)
    {
        if (c == '-') _sign = -1;
        
        _currentState = State.q1;
    }

    private void ToStateQ2(char c)
    {
        var digit = c - '0';

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
            ToStateQd();
        }
        else
        {
            _result = _result * 10 + digit;
            _currentState = State.q2;
        }
    }
    
    private void ToStateQd()
    {
        _currentState = State.qd;
    }
}