const div = require('./div');

test("divides 4/2 to be 2", () => {
    expect(div(4, 2)).toBe(2)
})

test("divides 4/0 expects Error", () => {
    expect(div(4, 0)).toThrow(error);
})