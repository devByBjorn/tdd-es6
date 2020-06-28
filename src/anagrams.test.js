import { expect } from 'chai'
import {
  formString,
  sortKeys,
  compareKeys,
  sumObjValues,
  compareObjValues,
  isAnagram,
} from './anagrams'

describe('formString functionality', () => {
  it('should turn a string into an array, each char should be represented as an array item, no spaces should be represented', () => {
    const str = 'one ape'
    const expected = ['o', 'n', 'e', 'a', 'p', 'e']
    const actual = formString(str)
    expect(actual).to.deep.equal(expected)
  })
})

describe('sortKeys functionality', () => {
  it('should take an object as input and return the objects keys in a sorted array', () => {
    const obj = { a: 1, e: 2, n: 1, o: 1, p: 1 }
    const expected = ['a', 'e', 'n', 'o', 'p']
    const actual = sortKeys(obj)
    expect(actual).to.deep.equal(expected)
  })

  it('should return a correctly sorted array when capitals and minor letters are combined', () => {
    const obj = { c: 1, A: 3, T: 1 }
    const expected = ['A', 'c', 'T']
    const actual = sortKeys(obj)
    expect(actual).to.deep.equal(expected)
  })
})

describe('compareKeys functionality', () => {
  it('should return false when comparing two objects that do not have the same key', () => {
    const obj1 = { a: 1, e: 2, n: 1, o: 1, p: 1 }
    const obj2 = { c: 1, A: 3, T: 1 }
    const expected = false
    const actual = compareKeys(obj1, obj2)
    expect(actual).to.deep.equal(expected)
  })

  it('should return true when compareing objects with the same keys', () => {
    const obj1 = { c: 1, A: 3, T: 1 }
    const obj2 = { c: 1, A: 9, T: 1 }
    const expected = true
    const actual = compareKeys(obj1, obj2)
    expect(actual).to.deep.equal(expected)
  })

  it('should return true when comparing objects with the same keys, capitals and minor letters should be counted as the same', () => {
    const obj1 = { c: 1, A: 3, T: 1 }
    const obj2 = { c: 1, A: 9, t: 1 }
    const expected = true
    const actual = compareKeys(obj1, obj2)
    expect(actual).to.deep.equal(expected)
  })
})

describe('sumObjValues functionality', () => {
  it('should return the sum of an objects values', () => {
    const obj = { c: 1, a: 1, t: 5 }
    const expected = 7
    const actual = sumObjValues(obj)
    expect(actual).to.deep.equal(expected)
  })
})

describe('compareObjValues functionality', () => {
  it('should return true if the sum of two objects values are the same', () => {
    const obj1 = { c: 1, a: 1, t: 5 }
    const obj2 = { d: 1, a: 1, k: 5 }
    const expected = true
    const actual = compareObjValues(obj1, obj2)
    expect(actual).to.deep.equal(expected)
  })
  it('should return false if teh sum of two ojbects values are not the samee', () => {
    const obj1 = { c: 1, a: 1, t: 5 }
    const obj2 = { d: 1, a: 1, k: 8 }
    const expected = false
    const actual = compareObjValues(obj1, obj2)
    expect(actual).to.deep.equal(expected)
  })
})

describe('isAnagram functionality', () => {
  it('should return true if two strings are anagrams of each other', () => {
    const str1 = 'hello world'
    const str2 = 'HelloWorld'
    const expected = true
    const actual = isAnagram(str1, str2)
    expect(actual).to.deep.eq(expected)
  })
  it('should return false if two string are not anagrams of each', () => {
    const str1 = 'hello worlds'
    const str2 = 'hello world'
    const expected = false
    const actual = isAnagram(str1, str2)
    expect(actual).to.deep.eq(expected)
  })
})