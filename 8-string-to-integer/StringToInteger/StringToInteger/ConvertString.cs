namespace StringToInteger;

public static class ConvertString
{
    public static int MyAtoi(string s)
    {
        var stateMachine = new StateMachine();

        for (var i = 0; i < s.Length && stateMachine.GetState() != State.qd; i++)
        {
            stateMachine.Transition(s[i]);
        }

        return stateMachine.GetResultAsInt();
    }
}