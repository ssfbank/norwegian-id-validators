import { validateKid } from '../src';


test('100001928231 is a valid kid', () => {
    expect(validateKid('100001928231')).toBe(true);
});

test('100001928232 is an invalid kid', () => {
    expect(validateKid('100001928232')).toBe(false);
});

test('"" is an invalid kid', () => {
    expect(validateKid('')).toBe(false);
});
