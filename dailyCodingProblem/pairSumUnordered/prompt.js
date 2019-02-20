import { pairSum, pairSum2 } from './solution';

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

console.log('true', pairSum2([6, 18, 6, 29, 12], 35));
console.log('true', pairSum2([6, 18, 6, 29, 12], 24));
console.log('false', pairSum2([6, 18, 6, 29, 12], 20));
console.log('false', pairSum2([6], 20));
console.log('false', pairSum2([], 20));
