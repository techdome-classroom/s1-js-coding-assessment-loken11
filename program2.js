/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
        // Map of Roman numerals and their corresponding integer values
        const romanToValue = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        
        let total = 0;
        
        // Traverse the Roman numeral string
        for (let i = 0; i < s.length; i++) {
            // Get the current value and the next value
            let currentValue = romanToValue[s[i]];
            let nextValue = romanToValue[s[i + 1]];
    
            // If the current value is less than the next value, subtract current value
            if (currentValue < nextValue) {
                total -= currentValue;
            } else {
                // Otherwise, add the current value
                total += currentValue;
            }
        }
        
        return total;
    }
    
    // Example usage:
    console.log(romanToInt("III"));      // Output: 3
    console.log(romanToInt("LVIII"));    // Output: 58
    console.log(romanToInt("MCMXCIV"));  // Output: 1994
    




module.exports={romanToInt}