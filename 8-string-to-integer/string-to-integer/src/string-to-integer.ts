export function myAtoi(s: string): number {
    const stateMachine = new StateMachine();
    for (let i = 0; i < s.length && stateMachine.GetState() != State.Qd; i++) {
        stateMachine.Transition(s.charAt(i));
    }
    return stateMachine.GetResult();
}

const INT_MAX: number = Math.pow(2, 31) - 1;
const INT_MIN: number = Math.pow(-2, 31);

class StateMachine {
    private currentState: State = State.Q0;
    private result: number = 0;
    private sign: number = 1;

    public GetState(): State {
        return this.currentState;
    }

    public GetResult(): State {
        return this.result * this.sign;
    }

    public Transition(ch: string): void {
        if (this.currentState === State.Q0) {
            if (ch === ' ') {
                return;
            } else if (this.IsNumber(ch)) {
                this.ToStateQ1(ch);
            } else if (ch === '+' || ch === '-') {
                this.ToStateQ2(ch);
            } else {
                this.ToStateQd();
            }
        } else {
            if (this.IsNumber(ch)) {
                this.ToStateQ1(ch);
            } else {
                this.ToStateQd();
            }
        }
    }

    private ToStateQ1(ch: string): void {
        this.currentState = State.Q1;
        this.AppendDigit(ch);
    }

    private ToStateQ2(ch: string): void {
        if (ch === '-') {
            this.sign = -1;
        }
        this.currentState = State.Q1;
    }

    private ToStateQd(): void {
        this.currentState = State.Qd;
    }

    private AppendDigit(ch: string): void {
        const value = Number(ch);

        if (this.result > Math.floor(INT_MAX / 10) ||
            (this.result === Math.floor(INT_MAX / 10) && value > INT_MAX % 10)) {
            if (this.sign === 1) {
                this.result = INT_MAX;
            } else {
                this.result = INT_MIN;
                this.sign = 1;
            }
            this.ToStateQd()
        } else {
            this.result = this.result * 10 + value;
        }
    }

    private IsNumber(ch: string): boolean {
        if (typeof ch !== 'string') {
            return false;
        }

        if (ch.trim() === '') {
            return false;
        }

        const parseResult = Number(ch);

        return !isNaN(parseResult);
    }
}

enum State {
    Q0,
    Q1,
    Q2,
    Qd,
}