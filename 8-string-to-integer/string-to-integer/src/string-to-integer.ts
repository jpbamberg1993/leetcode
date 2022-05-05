const MAX_INT_VALUE = 2147483647
const MIN_INT_VALUE = -2147483648

export function myAtoi(s: string): number {
  const stateMachine = new StateMachine()

  for (let i = 0; i < s.length && stateMachine.getState() !== State.QD; i++) {
    stateMachine.transition(s.charAt(i))
  }

  return stateMachine.getResult()
}

enum State { Q0, Q1, Q2, QD}

class StateMachine {
  private state: State
  private result: number
  private sign: number

  constructor() {
    this.state = State.Q0
    this.result = 0
    this.sign = 1
  }

  public transition(ch: string): void {
    if (this.state === State.Q0) {
      this.qZeroTransition(ch)
    } else if (this.state === State.Q1) {
      this.qOneTransition(ch)
    } else if (this.state === State.Q2) {
      this.qTwoTransition(ch)
    } else {
      this.state = State.QD
    }
  }

  public getState(): number {
    return this.state
  }

  public getResult(): number {
    return this.result * this.sign
  }

  private qZeroTransition(ch: string): void {
    if (StateMachine.isEmptyCharacter(ch)) {
      return
    }

    if (StateMachine.isSign(ch)) {
      this.state = State.Q1
      if (ch === '-') {
        this.sign = -1
      }
      return
    }

    if (StateMachine.charIsDigit(ch)) {
      this.qTwoTransition(ch)
      this.state = State.Q2
      return
    }

    this.state = State.QD
  }

  private qOneTransition(ch: string): void {
    if (StateMachine.charIsDigit(ch)) {
      this.qTwoTransition(ch)
    } else {
      this.state = State.QD
    }
  }

  private qTwoTransition(ch: string): void {
    if (StateMachine.charIsDigit(ch)) {
      const digit = parseInt(ch)
      if (this.result > MAX_INT_VALUE / 10 ||
        (this.result === Math.floor(MAX_INT_VALUE / 10) && digit > MAX_INT_VALUE % 10)) {
        this.result = this.sign === 1 ? MAX_INT_VALUE : MIN_INT_VALUE
        this.sign = 1
        this.state = State.QD
        return
      }
      this.result = (this.result * 10) + digit
      this.state = State.Q2
    } else {
      this.state = State.QD
    }
  }

  private static isSign(ch: string): boolean {
    return ch === '+' || ch === '-'
  }

  private static isEmptyCharacter(ch: string): boolean {
    return ch === ' '
  }

  private static charIsDigit(s: string): boolean {
    return s >= '0' && s <= '9'
  }
}
