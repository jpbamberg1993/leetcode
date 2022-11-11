export function myAtoi(s: string): number {
    const stateMachine = new StateMachine();
    for (let i = 0; i < s.length && stateMachine.getState() !== State.Qd; i++) {
        stateMachine.transition(s.charAt(i));
    }
    return stateMachine.getValue();
}

const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(-2, 31);

class StateMachine {
    private state: State;
    private value: number;
    private symbol: number;

    constructor() {
        this.state = State.Q0;
        this.value = 0;
        this.symbol = 1;
    }

    public getState(): State {
        return this.state;
    }

    public getValue(): number {
        return this.value * this.symbol;
    }

    public transition(ch: string): void {
        if (this.state === State.Q0) {
            if (ch === ' ') {
                return;
            } else if (ch === '+' || ch === '-') {
                this.toStateQ1(ch);
            } else if (this.isNumeric(ch)) {
                this.toStateQ2(ch);
            } else {
                this.toStateQd();
            }
        } else {
            if (this.isNumeric(ch)) {
                this.toStateQ2(ch);
            } else {
                this.toStateQd();
            }
        }
    }

    private toStateQ1(ch: string): void {
        if (ch === '-') {
            this.symbol = -1;
        }
        this.state = State.Q1;
    }

    private toStateQ2(ch: string): void {
        const digit = Number(ch);
        this.state = State.Q2;
        this.appendDigit(digit);
    }

    private toStateQd(): void {
        this.state = State.Qd;
    }

    private appendDigit(digit: number): void {
        if (this.value > Math.floor(INT_MAX / 10) ||
            (this.value === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            if (this.symbol === -1) {
                this.value = INT_MIN;
                this.symbol = 1;
            } else {
                this.value = INT_MAX;
            }
            this.toStateQd();
        } else {
            this.value = this.value * 10 + digit;
        }
    }

    private isNumeric(ch: string): boolean {
        if (typeof ch !== 'string') {
            return false;
        }

        if (ch.trim() === '') {
            return false;
        }

        return !isNaN(+ch);
    }
}

enum State {
    Q0,
    Q1,
    Q2,
    Qd,
}
