const addinator = require('../modules/addinator.js')

//test happy path
test('Sum of 1 and 1 is 2', () => {
    expect(addinator(1,1)).toBe(2)
})

test('Sum of -1 and 2', () => {
    expect(addinator(-1,2)).toBe(1)
})

test('Sum with only one value given', () => {
    expect(addinator(1)).toBe(1);
})

test('Sum of digits work', () => {
    expect(addinator('1','2')).toBe(3);
})