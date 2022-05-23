/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x= String(x)
const reversedArray=x.split('').reverse().join('');
return x === reversedArray;
};