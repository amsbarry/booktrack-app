// src/utils/validation.test.js
import { isNonEmptyString } from './validation';
describe('isNonEmptyString', () => {
  it('should return true for a non-empty string', () => {
    expect(isNonEmptyString('Hello World')).toBe(true);
  });
  it('should return false for an empty string', () => {
    expect(isNonEmptyString('')).toBe(false);
  });
  it('should return false for a string with only spaces', () => {
    expect(isNonEmptyString('   ')).toBe(false);
  });
  it('should return false for non-string types', () => {
    expect(isNonEmptyString(123)).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(undefined)).toBe(false);
    expect(isNonEmptyString({})).toBe(false);
    expect(isNonEmptyString([])).toBe(false);
  });
});
