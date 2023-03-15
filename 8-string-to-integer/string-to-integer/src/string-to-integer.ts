export function myAtoi(s: string): number {
    const stateMachine = stateMachineFactory()
    for (let i = 0; i < s.length && stateMachine.getState() !== State.Qd; i++) {
        stateMachine.transition(s[i])
    }
    return stateMachine.getResult()
}

function stateMachineFactory(): StateMachine {
    let state: State = State.Q0
    let result: number = 0
    let carry: number = 1

    return {
        getState,
        getResult,
        transition,
    }

    function getState(): State {
        return state
    }

    function getResult(): number {
        return carry * result
    }

    function transition(c: string): void {
        if (state === State.Q0) {
            if (c === ' ') {
                return
            } else if (charIsDigit(c)) {
                toStateQ2(c)
            } else if (c === '-' || c === '+') {
                toStateQ1(c)
            } else {
                toStateQd()
            }
        } else {
            if (charIsDigit(c)) {
                toStateQ2(c)
            } else {
                toStateQd()
            }
        }
    }

    function toStateQ1(c: string): void {
        if (c === '-') {
            carry = -1
        }
        state = State.Q1
    }

    function toStateQ2(c: string): void {
        state = State.Q2
        const value = parseInt(c, 10)
        appendDigit(value)
    }

    function toStateQd() {
        state = State.Qd
    }

    function appendDigit(d: number): void {
        if ((result > INT_MAX / 10 || (result === Math.trunc(INT_MAX / 10) && d > INT_MAX % 10))) {
            result = carry < 0 ? INT_MIN : INT_MAX
            carry = 1
            toStateQd()
            return
        }
        result = result * 10 + d
    }
}

function charIsDigit(c: string): boolean {
    return c >= '0' && c <= '9'
}

const INT_MAX = Math.pow(2, 31) - 1
const INT_MIN = Math.pow(-2, 31)

enum State {
    Q0,
    Q1,
    Q2,
    Qd,
}

type StateMachine = {
    getState: () => State
    getResult: () => number
    transition: (c: string) => void
}
