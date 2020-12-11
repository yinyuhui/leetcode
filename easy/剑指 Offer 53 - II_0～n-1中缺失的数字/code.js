/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
// var missingNumber = function(nums) {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== i) return i
//     }
//     return nums.length
// };

// O(logn)
var missingNumber = function(nums) {
    let left = 0, right = nums.length - 1
    while(right >= left) {
        let index = (left + right) >> 1
        if(nums[index] === index) {
            left = index + 1
        } else {
            right = index - 1
        }
    }
    return left
}