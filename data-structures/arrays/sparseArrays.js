// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
  const counts = queries.reduce((acc, string) => {
    const occurrences = strings.filter(s => s === string).length
    return [...(acc|| []), occurrences]
  }, [])

  return counts
}

module.exports = matchingStrings