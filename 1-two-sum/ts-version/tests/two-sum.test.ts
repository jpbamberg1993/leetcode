import twoSum from '../src/two-sum'

describe('twoSum', function() {
  it('returns indexs of numbers needed to sum', function() {
    const nums = [2,7,11,15]
    const target = 9

    const result = twoSum(nums, target)
    
    expect(result).toEqual(expect.arrayContaining([0, 1]))
  })

  it('returns indexes of numbers needed to sum from a 3 item array', function() {
    const nums = [3, 2, 4]
    const target = 6

    const result = twoSum(nums, target)
    
    expect(result).toEqual(expect.arrayContaining([1, 2]))
  })

  it('returns indexes of numbers needed to sum from a 2 item array', function() {
    const nums = [3, 3]
    const target = 6

    const result = twoSum(nums, target)

    expect(result).toEqual(expect.arrayContaining([0, 1]))
  })
})
