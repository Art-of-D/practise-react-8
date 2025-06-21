const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (const [, item] of cart.entries()) {
    console.log(item);
    totalAmount += item.amount;
    totalCost += item.amount * parseFloat(item.price);
  }

  return { totalAmount, totalCost };
};
