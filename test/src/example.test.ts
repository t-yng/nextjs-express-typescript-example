const sum = (a: number, b: number): number => a + b;

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
