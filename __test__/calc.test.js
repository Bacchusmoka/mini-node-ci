import { calc } from '../src/calc.js';
describe('calc', () => {
    test('add/sub/mul work', () => {
        expect(calc.add(1, 2)).toBe(3);
        expect(calc.sub(5, 3)).toBe(2);
        expect(calc.mul(4, 3)).toBe(12);
    });
    test('div works', () => {
        expect(calc.div(6, 3)).toBe(2);
    });
        test('div by zero throws', () => {
            expect(() => calc.div(1, 0)).toThrow(RangeError);
        });

});