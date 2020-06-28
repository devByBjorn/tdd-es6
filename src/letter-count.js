export const getLetterCount = string => {
  const letters = string.split('')

  return letters.reduce((acc, letter) => {
    const count = acc[letter] || 0
    return {
      ...acc,
      [letter]: count + 1
    }
  }, {})
}