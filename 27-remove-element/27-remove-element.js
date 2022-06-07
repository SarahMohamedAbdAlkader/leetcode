/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElementI = function(nums, val) {
    for(let i =0;i <nums.length;i++){
        if(nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }
}

var removeElement = function(nums, val) {
     if( !nums.length)
        {
            return [];
        }
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            length=length-1;
            i--;
        }
    }
}
