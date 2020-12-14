/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 先用个笨办法，全遍历一遍，统计出现次数
// var search = function (nums, target) {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             count++
//         }
//     }
//     return count
// };

// 稍微优化一点，统计结束后，剩下的数字不再遍历
// var search = function (nums, target) {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) count++
//         if(nums[i] > target) break
//     }
//     return count
// }

// 再优化一下，排序之后的数组，可以用二分找一下目标值，再向两边扩散
// 不是很懂，越优化运行时间越长了... 
// var search = function (nums, target) {
//     let l = 0, r = nums.length - 1
//     let center = -1
//     while (l <= r) {
//         let i = (l + r) >> 1
//         if (nums[i] > target) r = i - 1
//         if (nums[i] < target) l = i + 1
//         if (nums[i] === target) {
//             center = i
//             break
//         }
//     }

//     let count = 0
//     l = r = center
//     if (center !== -1) {
//         while (nums[l--] === target) count++
//         while (nums[++r] === target) count++
//     }
//     return count
// }

// 参考题解优化一下（找到 target 出现的第一项 target + 1 出现的第一项）
// 题解：找到比 target 小的最后一项，比 target 大的最前一项（）
// 真的越优化成绩越差，什么原因呢，确实是优化了呢
var search = function (nums, target) {
    if (!nums.length || target < nums[0] || target > nums[nums.length - 1]) return 0
    let l = 0, r = nums.length - 1
    let f = -1
    // 先找 target 第一次出现的地方
    while (l <= r) {
        let m = (l + r) >> 1
        if (nums[m] >= target) r = m - 1
        if (nums[m] < target) l = m + 1
    }
    // 从 target 出现的地方向后二分，查找 target + 1 第一次出现的地方
    f = l, r = nums.length - 1
    while (l <= r) {
        let m = (l + r) >> 1
        if (nums[m] >= target + 1) r = m - 1
        if (nums[m] < target + 1) l = m + 1
    }
    // 结果就出来了
    return r - f + 1
}