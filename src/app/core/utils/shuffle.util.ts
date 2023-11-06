export const shuffle = <T extends unknown[]>(array: T): T => {
  const arrayCopy = [...array] as T

  let currentIndex = arrayCopy.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = arrayCopy[currentIndex]
    arrayCopy[currentIndex] = arrayCopy[randomIndex]
    arrayCopy[randomIndex] = temporaryValue
  }

  return arrayCopy
}
