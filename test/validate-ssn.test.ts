import { validateSsn } from '../src/index';

test('01010750160 is a valid ssn', () => {
    expect(validateSsn('01010750160')).toBe(true);
});

test('26068848740 is a valid ssn', () => {
    expect(validateSsn('26068848740')).toBe(true);
});

test('020161 26007 is a valid ssn', () => {
    expect(validateSsn('020161 26007')).toBe(true);
});

test('11111234567 is an invalid ssn', () => {
    expect(validateSsn('11111234567')).toBe(false);
});

test('1234123456 is an invalid ssn', () => {
    expect(validateSsn('1234123456')).toBe(false);
});

test('"" is an invalid ssn', () => {
    expect(validateSsn('')).toBe(false);
});
