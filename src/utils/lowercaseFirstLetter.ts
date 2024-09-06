/**
 * Converts the first letter of a string to lowercase.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter converted to lowercase.
 */
export const lowercaseFirstLetter = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
