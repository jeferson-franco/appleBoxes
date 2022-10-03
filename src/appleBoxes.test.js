const solution = require('./appleBoxes.js');

test('test 1', () => {
    expect(solution(5)).toBe(-15);
});

test('test 2', () => {
    expect(solution(15)).toBe(-120);
});

test('test 3', () => {
    expect(solution(36)).toBe(666);
});

test('test 4', () => {
    expect(solution(1)).toBe(-1);
});

test('test 5', () => {
    expect(solution(14)).toBe(105);
});

test('test 6', () => {
    expect(solution(12)).toBe(78);
});

test('test 7', () => {
    expect(solution(9)).toBe(-45);
});

test('test 8', () => {
    expect(solution(40)).toBe(820);
});

test('test 9', () => {
    expect(solution(37)).toBe(-703);
});
