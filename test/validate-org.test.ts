import { validateOrg } from '../src';

test('998447356 is a valid ssn', () => {
    expect(validateOrg('998447356')).toBe(true);
});

test('998447357 is an invalid ssn', () => {
    expect(validateOrg('998447357')).toBe(false);
});

test('99844735 is an invalid ssn', () => {
    expect(validateOrg('99844735')).toBe(false);
});
  
test('"" is an invalid ssn', () => {
    expect(validateOrg('')).toBe(false);
});
