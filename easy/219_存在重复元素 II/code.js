/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 双指针 O(n*k) 很耗时
// var containsNearbyDuplicate = function(nums, k) {
//     let left = 0, right = 1, res = false;
//     while(left < nums.length && !res) {
//         while(Math.abs(right - left) <= k && !res) {
//             res = nums[left] === nums[right++]
//         }
//         right = ++left + 1
//     }
//     return res
// };

// Map
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
            return true
        }
        map.set(nums[i], i)
    }
    return false
}
