/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const length = nums.length;
    let i = 0;
    for (i; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i--;
        }
    }
    for (i; i < length; i++) {
        if (!nums[i]) {
            nums[i] = 0;
        }
    }
    return nums
};