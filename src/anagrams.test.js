import { expect } from 'chai'
import {
  letterCount,
  formString,
  sortKeys,
  compareKeys,
  sumObjValues,
  compareObjValues,
  isAnagram,
} from './anagrams'

describe('letterCount functionality', () => {
  it('should take an array and return a obejct with array items as keys and item occurences as value', () => {
    const arr = ['blue', 'red', 'green', 'blue', 'green', 'blue']
    const expected = { blue: 3, green: 2, red: 1 }
    const actual = letterCount(arr)
    expect(actual).to.deep.equal(expected)
  })
})

describe('formString functionality', () => {
  it('should turn a string into an array, each char should be represented as an array item, no spaces should be represented', () => {
    const str = 'one ape'
    const expected = ['o', 'n', 'e', 'a', 'p', 'e']
    const actual = formString(str)
    expect(actual).to.deep.equal(expected)
  })
})

describe('isAnagram functionality', () => {
  it('should return true if two strings are anagrams of each other', () => {
    const str1 = 'silent'
    const str2 = 'lisent'
    const expected = true
    const actual = isAnagram(str1, str2)
    expect(actual).to.equal(expected)
  })
  it('should return true if one string has spaces in it if letters form an anagram of the orther word', () => {
    const str1 = 'eleven plus two'
    const str2 = 'twelveplusone'
    const expected = true
    const actual = isAnagram(str1, str2)
    expect(actual).to.equal(expected)
  })
  it('should return false if one string has more letters than the other', () => {
    const str1 = 'silentt'
    const str2 = 'lisent'
    const expected = false
    const actual = isAnagram(str1, str2)
    expect(actual).to.equal(expected)
  })
  it('should reutrn false if strings has the same length but different quantity of certain letter', () => {
    const str1 = 'sillent'
    const str2 = 'lissent'
    const expected = false
    const actual = isAnagram(str1, str2)
    expect(actual).to.equal(expected)
  })
})


// describe('sortKeys functionality', () => {
//   it('should take an object as input and return the objects keys in a sorted array', () => {
//     const obj = { a: 1, e: 2, n: 1, o: 1, p: 1 }
//     const expected = ['a', 'e', 'n', 'o', 'p']
//     const actual = sortKeys(obj)
//     expect(actual).to.deep.equal(expected)
//   })

//   it('should return a correctly sorted array when capitals and minor letters are combined', () => {
//     const obj = { c: 1, A: 3, T: 1 }
//     const expected = ['A', 'c', 'T']
//     const actual = sortKeys(obj)
//     expect(actual).to.deep.equal(expected)
//   })
// })

// describe('compareKeys functionality', () => {
//   it('should return false when comparing two objects that do not have the same key', () => {
//     const obj1 = { a: 1, e: 2, n: 1, o: 1, p: 1 }
//     const obj2 = { c: 1, A: 3, T: 1 }
//     const expected = false
//     const actual = compareKeys(obj1, obj2)
//     expect(actual).to.equal(expected)
//   })

//   it('should return true when compareing objects with the same keys', () => {
//     const obj1 = { c: 1, A: 3, T: 1 }
//     const obj2 = { c: 1, A: 9, T: 1 }
//     const expected = true
//     const actual = compareKeys(obj1, obj2)
//     expect(actual).to.equal(expected)
//   })

//   it('should return true when comparing objects with the same keys, capitals and minor letters should be counted as the same', () => {
//     const obj1 = { c: 1, A: 3, T: 1 }
//     const obj2 = { c: 1, A: 9, t: 1 }
//     const expected = true
//     const actual = compareKeys(obj1, obj2)
//     expect(actual).to.equal(expected)
//   })
// })

// describe('sumObjValues functionality', () => {
//   it('should return the sum of an objects values', () => {
//     const obj = { c: 1, a: 1, t: 5 }
//     const expected = 7
//     const actual = sumObjValues(obj)
//     expect(actual).to.equal(expected)
//   })
// })

// describe('compareObjValues functionality', () => {
//   it('should return true if the sum of two objects values are the same', () => {
//     const obj1 = { c: 1, a: 1, t: 5 }
//     const obj2 = { d: 1, a: 1, k: 5 }
//     const expected = true
//     const actual = compareObjValues(obj1, obj2)
//     expect(actual).to.equal(expected)
//   })
//   it('should return false if teh sum of two ojbects values are not the samee', () => {
//     const obj1 = { c: 1, a: 1, t: 5 }
//     const obj2 = { d: 1, a: 1, k: 8 }
//     const expected = false
//     const actual = compareObjValues(obj1, obj2)
//     expect(actual).to.equal(expected)
//   })
// })