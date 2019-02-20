import { numberWays } from './solution';

/* Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the number of ways to make change for that target amount using the given coin denominations. Note that an unlimited amount of coins is at your disposal.*/

console.log('answer: ', numberWays(0, [2, 3, 4, 7]));
console.log('answer: ', numberWays(9, [5]));
console.log('answer: ', numberWays(7, [2, 4]));
console.log('answer: ', numberWays(6, [1, 5]));
console.log('answer: ', numberWays(4, [1, 5, 10, 25]));
console.log('answer: ', numberWays(5, [1, 5, 10, 25]));
console.log('answer: ', numberWays(10, [1, 5, 10, 25]));
console.log('answer: ', numberWays(25, [1, 5, 10, 25]));
console.log('answer: ', numberWays(12, [2, 3, 7]));
console.log('answer: ', numberWays(7, [2, 3, 4, 7]));
