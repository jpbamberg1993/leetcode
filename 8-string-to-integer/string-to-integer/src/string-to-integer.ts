export function myAtoi(s: string): number {
  const stateMachine = new StateMachine()

  for (let i = 0; i < s.length && stateMachine.getState() !== State.QD; i++) {
    stateMachine.transition(s.charAt(i))
  }

  return stateMachine.getResult()
}

enum State { Q0, Q1, Q2, QD}

class StateMachine {
  private readonly INT_MAX: number
  private readonly INT_MIN: number

  private state: State
  private result: number
  private sign: number

  constructor() {
    this.INT_MAX = Math.pow(2, 31) - 1
    this.INT_MIN = -Math.pow(2, 31)

    this.state = State.Q0
    this.result = 0
    this.sign = 1
  }

  public getState(): number {
    return this.state
  }

  public getResult(): number {
    return this.result * this.sign
  }

  public transition(ch: string): void {
    if (this.state === State.Q0) {
      if (ch === ' ') {
        return
      } else if (ch === '+' || ch === '-') {
        this.toStateQ1(ch)
      } else if (StateMachine.charIsDigit(ch)) {
        const digit = parseInt(ch)
        this.toStateQ2(digit)
      } else {
        this.toStateQd()
      }
    } else if (this.state === State.Q1 || this.state === State.Q2) {
      if (StateMachine.charIsDigit(ch)) {
        const digit = parseInt(ch)
        this.appendDigit(digit)
      } else {
        this.state = State.QD
      }
    }
  }

  private toStateQ1(ch: string): void {
    this.sign = ch === '-' ? -1 : 1
    this.state = State.Q1
  }

  private toStateQ2(ch: number): void {
    this.state = State.Q2
    this.appendDigit(ch)
  }

  private toStateQd() {
    this.state = State.QD
  }

  private appendDigit(digit: number): void {
    if (this.willOverflowInt(digit)) {
      if (this.sign === 1) {
        this.result = this.INT_MAX
      } else {
        this.result = this.INT_MIN
        this.sign = 1
      }
      this.state = State.QD
    } else {
      this.result = (this.result * 10) + digit
    }
  }

  private willOverflowInt(digit: number): boolean {
    if (this.result > this.INT_MAX / 10) {
      return true
    }

    return this.result === Math.floor(this.INT_MAX / 10) && digit > this.INT_MAX % 10;
  }

  private static charIsDigit(s: string): boolean {
    return s >= '0' && s <= '9'
  }
}
