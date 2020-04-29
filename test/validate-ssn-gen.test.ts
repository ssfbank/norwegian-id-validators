import { generateDigitsSsn } from '../src';


test('SSN Gen can get a valid ssn', () => {
    const ssn = generateDigitsSsn('260688');
    expect(ssn).toBeTruthy();
});