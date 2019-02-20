function threeNumsToZero(arr) {
  // return false if there are fewer than three integers
  if (arr.length < 3) return false;

  // sort the array and create a set, which will hold our unique combinations
  arr.sort((a, b) => a - b);
  let result = new Set();

  // loop through the array to access each int as the first in a combination, stopping at the third to last integer
  for (let i = 0; i < arr.length - 2; i++) {
    // account for the current element, and set a target to it's negative
    let currentEl = arr[i];
    let target = -arr[i];

    // get the indexes of the highest and lowest numbers in the remaining array
    let highNumIdx = arr.length - 1;
    let lowNumIdx = i + 1;

    while (highNumIdx > lowNumIdx) {
      let highNum = arr[highNumIdx];
      let lowNum = arr[lowNumIdx];
      let temp = [];

      /* test if the elements at our index pointers add up to the target, which means the two elements and currentEl are a combination that add up to 0.  */
      if (highNum + lowNum === target) {
        // Push the values into an array.
        temp.push(highNum, currentEl, lowNum);

        /*Sort it and make it a string before putting it in the set to compare it to values already in the set, as putting arrays have different references and therefore we can't account for duplicate combinations*/
        result.add(temp.sort().toString());

        /* change both indexes to continue testing the array. We change both because we know if we keep one of the values the same, we might have a duplicate value for the element we change and it wouldn't add into our set anyway*/
        lowNumIdx++;
        highNumIdx--;

        // if they are less than the target, move the lowNumIdx up to the next element, which will be >=
      } else if (highNum + lowNum < target) {
        lowNumIdx++;

        // if they are greater than the target, move the highNumIdx down to the prev element, which will be <=
      } else {
        highNumIdx--;
      }
    }
  }

  // return the set or false if there is nothing in it
  return result.size === 0 ? false : result;
}

threeNumsToZero([-1, 0, 1, -1, 2, -1, 3, -3]);
threeNumsToZero([-1, 0, 2]);
threeNumsToZero([]);

module.exports = { threeNumsToZero };
