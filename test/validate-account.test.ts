import { validateAccount } from '../src';


test('76940512057 is a valid account', () => {
    expect(validateAccount('76940512057')).toBe(true);
});

test('7694 05 12057 is a valid account', () => {
    expect(validateAccount('7694 05 12057')).toBe(true);
});

test('7694.05.12057 is a valid account', () => {
    expect(validateAccount('7694.05.12057')).toBe(true);
});

test('1010 10 10101 is an invalid account', () => {
    expect(validateAccount('1010 10 10101')).toBe(false);
});

test('1010 10 1010 is an invalid account', () => {
    expect(validateAccount('1010 10 1010')).toBe(false);
});

test('1010 10 1010 is an invalid account', () => {
    expect(validateAccount('1010 10 1010')).toBe(false);
});

test('"" is an invalid account', () => {
    expect(validateAccount('')).toBe(false);
});

