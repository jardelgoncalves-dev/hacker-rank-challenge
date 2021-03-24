// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const order = arr.sort();
  const sum = (total, number) => total + number;

  const firstSum = order.slice(0, order.length - 1).reduce(sum, 0)
  const lastSum = order.slice(1, order.length).reduce(sum, 0)
  process.stdout.write(`${firstSum} ${lastSum}`)
}

module.exports = miniMaxSum