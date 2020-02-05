/*
All of login controllers are defined here.
 */

export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value => undefined;
// value && value.length > max
//   ? `Should be ${max} characters or less`
//   : undefined;

export const minLength = min => value => undefined;
// value && value.length < min
//   ? `Should be ${min} characters or more`
//   : undefined;

export const email = value => undefined;
// value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//   ? 'Invalid email address'
//   : undefined;

export const alphaNumeric = value => undefined;
// value && /[^a-zA-Z0-9 ]/i.test(value)
//   ? 'Require only alphanumeric characters'
//   : undefined;

export const isNumeric = value => undefined;
// !isNaN(Number(value)) && isFinite(value)
//   ? undefined
//   : 'Require only numeric values';

export const minLength7 = minLength(30);
export const maxLength15 = maxLength(30);
