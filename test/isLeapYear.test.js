const isLeapYear = require('../modules/isLeapYear.js');

test('test divisible by 4 case', () => {
    expect(isLeapYear(8)).toBe(true);
})

test('test divisible by 100 case', () => {
    expect(isLeapYear(200)).toBe(false);
})

test('test divisible by 400 case', () => {
    expect(isLeapYear(800)).toBe(true);
})

test('test default case', () => {
    expect(isLeapYear(2011)).toBe(false);
})
