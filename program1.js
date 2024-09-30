/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
      
        const matchingParentheses = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        
       
        const stack = [];
        
       
        for (let char of s) {
           
            if (char in matchingParentheses) {

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


