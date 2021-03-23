function staircase(n) {
  for(let i = 1; i <= n; i++) {
    const stair = Array.from({ length: i }, () => '#').join('')
    process.stdout.write(`${stair}\n`.padStart(n + 1))
  }
}

module.exports = staircase