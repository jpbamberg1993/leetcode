export function myAtoi(s: string): number {
    const stateMachine = new StateMachine();
    for (let i = 0; i < s.length && stateMachine.getState() !== State.qd; i++) {
        stateMachine.transition(s.charAt(i));
    }
    return stateMachine.getResult();
}

const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(-2, 31);

class StateMachine {
    private currentState: State;
    private result: number;
    private sign: number;

    constructor() {
        this.currentState = State.q0;
        this.result = 0;
        this.sign = 1;
    }

    public getResult(): number {
        return this.sign * this.result;
    }

    public getState(): State {
        return this.currentState;
    }

    public transition(ch: string): void {
        if (this.currentState === State.q0) {
            if (ch === ' ') {
                return;
            } else if (ch === '+' || ch === '-') {
                this.toStateQ1(ch);
            } else if (this.isNumber(ch)) {
                this.toStateQ2(ch);
            } else {
                this.toStateQd();
            }
        } else if (this.currentState === State.q1 || this.currentState === State.q2) {
            if (this.isNumber(ch)) {
                this.toStateQ2(ch);
            } else {
                this.toStateQd();
            }
        }
    }

    private toStateQ1(ch: string): void {
        this.sign = ch === '-' ? -1 : 1;
        this.currentState = State.q1;
    }

    private toStateQ2(ch: string): void {
        this.currentState = State.q2;
        this.appendDigit(Number(ch));
    }

    private toStateQd(): void {
        this.currentState = State.qd;
    }

    private appendDigit(digit: number): void {
        if (this.result > INT_MAX / 10 || (this.result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            if (this.sign === 1) {
                this.result = INT_MAX;
            } else {
                this.result = INT_MIN;
                this.sign = 1;
            }

            this.toStateQd();
        } else {
            this.result = this.result * 10 + digit;
        }
    }

    private isNumber(ch: string): boolean {
        return !isNaN(parseInt(ch));
    }
}

enum State {
    q0,
    q1,
    q2,
    qd
}