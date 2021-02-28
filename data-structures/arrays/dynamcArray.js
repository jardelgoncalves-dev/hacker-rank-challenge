/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
function dynamicArray(n, queries) {
  const dynamic = Array.from({ length: n }, () => [])
  const assignValues = []
  let lastAnswer = 0;


  for (const [typeQuery, x, y] of queries) {
    const idx = (x ^ lastAnswer) % n
    if (typeQuery === 1) {
      dynamic[idx].push(y);  
    } else {
      const elem = y % dynamic[idx].length
      lastAnswer = dynamic[idx][elem]

      assignValues.push(lastAnswer)
    }
  }

  return assignValues.slice(0,n)
}


// using reduce
/**
function dynamicArray(n, queries) {
  const dynamic = Array.from({ length: n }, () => [])
  let lastAnswer = 0;

  return queries.reduce((acc, [typeQuery, x, y]) => {
    const idx = (x ^ lastAnswer) % n

    if (typeQuery === 1) {
      dynamic[idx].push(y);

      return acc
    }
    const elem = y % dynamic[idx].length
    lastAnswer = dynamic[idx][elem]
    
    acc.push(lastAnswer)
    return acc

  }, [])
}
*/


module.exports = dynamicArray