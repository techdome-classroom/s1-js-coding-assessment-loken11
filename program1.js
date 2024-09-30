/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    function isValid(s) {
        // Dictionary to hold matching pairs
        const matchingParentheses = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
        // Stack to hold opening brackets
        const stack = [];
        
        // Traverse through each character in the string
        for (let char of s) {
            // If it's a closing bracket
            if (char in matchingParentheses) {
                // Pop the top of the stack if it's not empty, otherwise assign dummy value '#'
                const topElement = stack.length > 0 ? stack.pop() : '#';
                
                // Check if the popped element matches the corresponding opening bracket
                if (matchingParentheses[char] !== topElement) {
                    return false;
                }
            } else {
                // It's an opening bracket, push onto the stack
                stack.push(char);
            }
        }
        
        // In the end, stack should be empty if all parentheses are valid
        return stack.length === 0;
    }
    
    // Example usage:
    console.log(isValid("()"));       // Output: true
    console.log(isValid("()[]{}"));   // Output: true
    console.log(isValid("(]"));       // Output: false
    
};

module.exports = { isValid };


