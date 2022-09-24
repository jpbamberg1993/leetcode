import {myAtoi} from '../src/string-to-integer'

describe('myAtoi', function (): void {
    it('is passed "42" and returns 42', function () {
        const s: string = "42"
        const result: number = myAtoi(s)
        expect(result).toEqual(42);
    })

    it('is passed "   -42" and returns -42', function () {
        const s: string = "   -42"
        const result: number = myAtoi(s)
        expect(result).toEqual(-42)
    })

    it('is passed "4193 with words" and returns 4193', function () {
        const s: string = "4193 with words"
        const result: number = myAtoi(s)
        expect(result).toEqual(4193)
    })

    it('is passed "-91283472332" and returns -2147483647', function () {
        const s: string = "-91283472332"
        const result: number = myAtoi(s)
        expect(result).toEqual(-2147483648)
    })

    it('is passed "2147483648" and returns 2147483647', function () {
        const s: string = "2147483648"
        const result: number = myAtoi(s)
        expect(result).toEqual(2147483647)
    })

    it('is passed "-2147483647" and returns -2147483648', function () {
        const s: string = "-2147483647";
        const result: number = myAtoi(s);
        expect(result).toEqual(-2147483647);
    })
})
