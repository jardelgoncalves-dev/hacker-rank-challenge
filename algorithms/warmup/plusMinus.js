// Complete the plusMinus function below.
function plusMinus(arr) {
    
  const counters = arr.reduce((counter, number) => {
     return {
         negative: number < 0 ? counter.negative+1: counter.negative,
         zero: number === 0 ? counter.zero+1 : counter.zero,
         positive: number > 0 ? counter.positive+1 : counter.positive
     } 
  }, {negative: 0, zero: 0, positive: 0})
  
  const size = arr.length

  const toFixed = (result) => (result).toFixed(6)
  
  process.stdout.write(
    toFixed(counters.positive/size) + '\n' +
    toFixed(counters.negative/size) + '\n' +
    toFixed(counters.zero/size)
  )
}

module.exports = plusMinus