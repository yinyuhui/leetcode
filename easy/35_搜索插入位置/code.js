/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 76ms 暴力解法
// var searchInsert = function(nums, target) {
//     // 如果小于第一项  返回0
//     if(target < nums[0]) return 0
//     for(let i = 0; i < nums.length; i++) {
//         // 如果有目标值 返回索引
//         if(target === nums[i]) {
//             return i
//         }
//         // 如果目标值是两者之间 返回插入索引
//         if(nums[i+1] && target > nums[i] && target < nums[i+1]) {
//             return i+1
//         }
//     }
//     // 没有比目标值大的元素 只能插入最后面
//     return nums.length
// };

// 二分法 64ms
var searchInsert = function(nums, target) {
  let len = nums.length;
  if (target < nums[0] || !len) return 0;
  if (target > nums[len - 1]) return len;

  let left = 0,
    right = nums.length - 1;
  let mid = Math.floor(left + (right - left) / 2);

  while (left < right) {
    // 如果目标值小于中间值 right左移  否则left右移
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
      break;
    }
    // 中值更新
    mid = Math.floor(left + (right - left) / 2);
  }

  // 没找到
  return nums[mid] >= target ? mid : mid + 1;
};
