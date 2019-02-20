function numberWays(n, coins) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let coin of coins) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (coin <= amount) {
        ways[amount] += ways[amount - coin];
      }
    }
  }
  return ways[n];
}

module.exports = { numberWays };
