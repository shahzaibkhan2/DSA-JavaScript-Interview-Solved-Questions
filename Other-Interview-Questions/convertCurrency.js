const currencyRates = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.95,
  PKR: 276.46,
};

const convertCurrency = (amount, from, to) => {
  let amountInUsd = 0;
  if (from !== "USD") amountInUsd = amount / currencyRates[from];
  else amountInUsd = amount;

  let convertedAmount = 0;
  if (to !== "USD") convertedAmount = amountInUsd * currencyRates[to];
  else convertedAmount = amountInUsd;

  return Math.round(convertedAmount * 100) / 100;
};

console.log(convertCurrency(350, "PKR", "USD"));
