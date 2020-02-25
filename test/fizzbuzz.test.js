const fizzbuzz = require('../modules/fizzbuzz.js')

test('test "Fizz" case', () => {
    expect(fizzbuzz(6)).toBe('Fizz')
})

test('test "Buzz" case', () => {
    expect(fizzbuzz(10)).toBe('Buzz')
})

test('test "FizzBuzz" case', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
})

test('test default case', () => {
    expect(fizzbuzz(16)).toBe(16)
})