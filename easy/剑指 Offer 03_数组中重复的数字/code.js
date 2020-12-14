/**
 * @param {number[]} nums
 * @return {number}
 */
// 居然用的 Map，脑子想啥呢，只用存值，用 Set 很合适！
// var findRepeatNumber = function(nums) {
//     let map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//         if(map.has(nums[i])) {
//             return nums[i]
//         } else {
//             map.set(nums[i], i)
//         }
//     }
//     return -1
// };

// Map 和 Set 的空间复杂度都是 O(n)
// var findRepeatNumber = function(nums) {
//     let set = new Set()
//     for(let i = 0; i <  nums.length; i++) {
//         if(set.has(nums[i])) {
//             return nums[i]
//         } else {
//             set.add(nums[i])
//         }
//     }
//     return -1
// }

// 根据题意，值和下标相同时，一个下标 i 对应 0-n 个 i 值，如果 n > 1，说明该数重复
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === i) {
            // 如果值和下标相等，说明位置是对的，不用对换位置，对比下一项
            // 下标自增在循环体中手动执行
            i++
        } else {
            // 如果下标和值不相等，要把这一项 m 放到 nums[m] 处
            // 首先判断下标为 nums[m] 处是不是 m，如果是，说明有两个 m，直接返回就行
            let temp = nums[nums[i]]
            if (temp === nums[i]) return temp
            nums[nums[i]] = nums[i]
            nums[i] = temp
        }
    }
    return -1
}