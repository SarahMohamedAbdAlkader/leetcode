/**
 * @param {string} s
 * @return {boolean}
 */
const getParentValue = (string) => {
    switch (string) {
        case '(':
        case ')':
            return 1;
        case '[':
        case ']':
            return 2
        case '{':
        case '}':
            return 3
    }
}
const OPEN_PARENT = ['(', '[', '{']
const CLOSE_PARENT = [')', ']', '}']

var isValid = function(s) {
    const arr = [...s]
    const tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if (OPEN_PARENT.includes(arr[i])) {
            tempArr.push(arr[i])
        } else {
            const ch = tempArr.pop()
            if (getParentValue(arr[i]) !== getParentValue(ch)) {
                return false;
            }

        }
    }
    return !tempArr.length

};
