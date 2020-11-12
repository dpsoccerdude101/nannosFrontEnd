const { test } = require('@jest/globals')
const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
    
})