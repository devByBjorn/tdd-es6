export const letterCount = arr => {
  return arr.reduce((acc, x) => {
    const count = acc[x] || 0
    return { ...acc, [x]: count + 1 }
  }, {})
}

export const formString = str => str.split(' ').join('').split('')

export const sortKeys = obj =>
  Object.keys(obj)
    .slice()
    .sort((a, b) => {
      let x = a.toLowerCase()
      let y = b.toLowerCase()
      if (x > y) return 1
      if (y > x) return -1
      return 0
    })

export const compareKeys = (obj1, obj2) => {
  const arr1 = sortKeys(obj1)
  const arr2 = sortKeys(obj2)

  if (arr1.length === arr2.length) {
    const compareArrs = arr1.find((item, i) => item.toLowerCase() !== arr2[i].toLowerCase())
    return compareArrs ? false : true
  } else {
    return false
  }
}

export const sumObjValues = obj =>
  Object.values(obj).reduce((acc, value) => acc + value, 0)

export const compareObjValues = (obj1, obj2) => {
  const sum1 = sumObjValues(obj1)
  const sum2 = sumObjValues(obj2)

  return sum1 !== sum2 ? false : true
}

export const isAnagram = (str1, str2) => {
  const arr1 = formString(str1)
  const arr2 = formString(str2)
  const count1 = letterCount(arr1)
  const count2 = letterCount(arr2)

  return compareKeys(count1, count2) && compareObjValues(count1, count2)
}
