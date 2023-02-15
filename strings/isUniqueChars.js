// Implement function which take string as parameter and
// return true if there is no duplicated char symbols
// otherwise return false

/**
 * @description complexity O(n)
 * @param {string} str
 */
function isUniqueChars(str) {
  const set = new Set([...str]);

  return str.length === set.size;
}

/**
 * @description complexity O(n)
 * @param {string} str
 */
function isUniqueChars_implementation_2(str) {
  /** @type { { [key: string]: boolean } } */
  const charCodes = {};

  for (const char of str) {
    if (charCodes[char] === true) {
      return false;
    } else {
      charCodes[char] = true;
    }
  }
  return true;
}
/**
 * @description complexity O(nlog(n) + n)
 * @param {string} str
 */
function isUniqueChars_implementation_3(str) {
  const sortedChars = str.split('').sort();

  for (let i = 0; i < sortedChars.length - 2; i++) {
    if (sortedChars[i] === sortedChars[i + 1]) {
      return false;
    }
  }
  return true;
}

const testCases = {
  'Hello world!': isUniqueChars('Hello world!'),
  abcdefg: isUniqueChars('abcdefg'),
  'Some foo': isUniqueChars_implementation_2('Some foo'),
  'Some bar': isUniqueChars_implementation_2('Some baz'),
  'Some fee': isUniqueChars_implementation_2('Some fee'),
  'Some baz': isUniqueChars_implementation_3('Some baz'),
};

console.table(testCases);
