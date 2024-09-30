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
                
               
                if (matchingParentheses[char] !== topElement) {
                    return false;
                }
            } else {
                
                stack.push(char);
            }
        }
        
        
        return stack.length === 0;
    }
    
   
    console.log(isValid("()"));
    console.log(isValid("()[]{}"));   // Output: true
    console.log(isValid("(]"));       // Output: false
    
};

module.exports = { isValid };


