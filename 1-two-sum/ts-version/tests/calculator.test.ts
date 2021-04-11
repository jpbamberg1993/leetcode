import Calculator from '../src/calculator'

describe('Calculator', function() {
  it('add', function() {
    let result = Calculator.sum(5, 2)
    expect(result).toBe(7)
  })

  it('subtract', function() {
    let result = Calculator.difference(5, 2)
    expect(result).toBe(3)
  })
})
