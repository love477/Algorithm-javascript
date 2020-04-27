const COINS = [64, 16, 4, 1];
const MAX_INDEX = 3;

function getCoins (money, coinIndex) {
  if(money <= 0) {
    return 0;
  }
  const coin = COINS[coinIndex];
  const coins = Math.floor(money / coin);
  const nextMoney = money - coins * coin;
  const nextCoinIndex = coinIndex + 1 > MAX_INDEX ? MAX_INDEX: coinIndex + 1;
  return coins + getCoins(nextMoney, nextCoinIndex);
}

function computeCoins(cost) {
  if (cost > 1024) {
    throw new Error('cost must be < 1024');
  }
  if (cost <= 0) {
    return 0;
  }
  const money = 1024 - cost;
  if (money === 0) {
    return 0;
  }
  
  return getCoins(money, 0);
}

