import { validateContent } from '../client/js/validator'
test('validate Content', () => {
    expect(validateContent('https://www.google.com')).toBe(true);
    expect(validateContent('abcxyz')).toBe(false);
});