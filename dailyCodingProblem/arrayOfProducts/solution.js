// division
function createProdArr(arr) {
  let fullProd = 1;
  for (let i = 0; i < arr.length; i++) {
    fullProd *= arr[i];
  }

  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(fullProd / arr[i]);
  }
  return finalArr;
}

//no division
function createProdArr2(arr) {
  let firstArr = [1];
  for (let i = 0; i < arr.length - 1; i++) {
    firstArr.push(firstArr[firstArr.length - 1] * arr[i]);
  }

  let secondArr = [1];
  for (let i = arr.length - 1; i >= 1; i--) {
    secondArr.push(secondArr[secondArr.length - 1] * arr[i]);
  }

  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(firstArr[i] * secondArr[arr.length - 1 - i]);
  }

  return finalArr;
}

module.exports = { createProdArr, createProdArr2 };
