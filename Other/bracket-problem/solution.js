// Stack is a good way to solve this problem.
// When you encounter an opening bracket ('(', '{', '['),
// push it onto the stack. When you encounter a closing
// bracket (')', '}', ']'), check if it matches the top
// of the stack (the most recent opening bracket).
// If it matches, pop the top of the stack. If it doesn't
// match, the string is invalid.

/*
 * Function to check if Valid Brackets exists in the input string
 * @param {String} the input string which needs to be tested
 * @return {Boolean} true or false based on the checks.
 */
function isValid(s) {
  // Map to store the pairs of open and close brackets
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Stack to hold opening brackets
  const stack = [];

  // Iterate over each character in the string
  for (let char of s) {
    if (char in bracketMap) {
      // Pop the top of the stack, or assign a dummy value if stack is empty
      const topElement = stack.length ? stack.pop() : "#";

      // If the popped element dosen't match the current closing bracket, return false
      if (bracketMap[char] !== topElement) {
        return false;
      }
    } else {
      // If it's a  opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty, all brackets were valid and matched
  return stack.length === 0;
}

// Example usage
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[()]}")); // Output: true
