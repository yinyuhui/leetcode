/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 新建数组 空间复杂度O(n)
// var runningSum = function(nums) {
//     let res = [nums[0]]
//     for(let i = 1; i < nums.length; i++) {
//         res[i] = res[i - 1] + nums[i]
//     }
//     return res
// };

// 原地修改
var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i]
    }
    return nums
}