/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const numberSign = Math.sign(x)
    const number = String(Math.abs((x)))
    let reversedNumber = '';
    for (let i = number.length - 1; i >= 0; i--) {
        reversedNumber += number[i]
    }
    reversedNumber = Number(reversedNumber)
    if (reversedNumber >= Math.pow(-2, 31) && reversedNumber <= Math.pow(2, 31) - 1) {
        return (reversedNumber) * numberSign
    }


    return 0
};