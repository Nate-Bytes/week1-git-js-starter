/**
 * String Utilities
 * Functions for string manipulation and analysis
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  // Alternate implementation using replace & regex
  return str.replace(/^./, (c) => c.toUpperCase());
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  // TODO: Implement reverse
  // Hint: Convert string to array with split(''), reverse it, join back
  // Or you can use a loop to build the reversed string
  return str.split('').reverse().join('');
  // Alternative implementation using a loop:
  /*
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
  */
}

/**
 * Checks if a string is a palindrome (reads same forwards and backwards)
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  // TODO: Implement palindrome checker
  // Hint: Convert to lowercase first for case-insensitive comparison
  // Compare the string with its reversed version
  // You can use the reverse function you just wrote!
   return reverse(str.toLowerCase()) === str.toLowerCase()
}

/**
 * Counts the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Number of words
 */
function wordCount(str) {
  // TODO: Implement word counter
  // Hint: Trim whitespace first, then split by spaces
  // Don't forget to handle empty strings!
  // Be careful with multiple spaces between words
  let count = 0;
  str.trim().split(/\s+/).forEach(word => {
    if (word.length > 0) count++;
  });
  return count;

}

// Export all functions
export { capitalize, reverse, isPalindrome, wordCount };
