/**
 * @param {string} s
 * @return {number}
 */
const getMappedValue = (romanNumberal) => {
    switch (romanNumberal) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}

const romanSubCases=['IV','IX','XL','XC','CD','CM']

var romanToInt = function(s) {
    const sumWithInitial = [...s].reduce(
        (previousValue, currentValue, index) => {
            return romanSubCases.includes([...s][index] + [...s][index + 1]) ? previousValue - getMappedValue(currentValue) : previousValue + getMappedValue(currentValue)
        },
        0
    );
    return sumWithInitial


};
