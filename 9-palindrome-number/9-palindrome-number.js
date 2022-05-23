/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeI = function(x) {
x= String(x)
const reversedArray=x.split('').reverse().join('');
return x === reversedArray;
};

var isPalindromeII = function(x) {
const xAsArray = convertNumberToArray(x)
const xAsArrayReversed = xAsArray.reverse()

for(let i = 0; i < xAsArray.length; i++) {
    if (xAsArray[i] != xAsArrayReversed[i]) {
        return false
    }
}
return true
};

var isPalindromeIII = function(x) {
    if (x < 0) {
        return false
    }
const xAsArray = convertNumberToArray(x)
const midIndex = Math.floor(xAsArray.length / 2)

for(let i = 0; i < midIndex; i++) {
    if (xAsArray[i] != xAsArray[xAsArray.length - 1 - i]) {
        return false
    }
}
return true
};

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    x = String(x)
    const midIndex = Math.floor(x.length / 2)

    for(let i = 0; i < midIndex; i++) {
        if (x[i] != x[x.length - 1 - i]) {
            return false
        }
    }
    return true
};

var convertNumberToArray = function(x) {
    const result = []
    
    while (x != 0) {
        result.push(x % 10)
        x = Math.floor(x / 10)
    }
    
    return result
}