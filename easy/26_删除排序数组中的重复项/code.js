/**
 * @param {number[]} nums
 * @return {number}
 */

// 280ms 把重复项都去掉了
// var removeDuplicates = function(nums) {
//     // 遍历下标
//     let count = 0
//     // 终止循环标志
//     let flag = true
//     while(flag) {
//         // 一个个取出来比较
//         let num = nums[count]
//         // 找到第一次出现和最后一次出现的index 只留一个
//         let startIndex = nums.indexOf(num)
//         let endIndex = nums.lastIndexOf(num)
//         nums.splice(startIndex, endIndex - startIndex)
//         // 取后面一个值
//         count++
//         // 全部都比较到了 结束循环
//         if(count >= nums.length) flag = false
//     }
//     return count
// };

// 76ms 其实题意可以不把重复项去掉 只需要把前几项的值修改为目标值即可
var removeDuplicates = function(nums) {
  let i = (j = 0);
  for (j; j < nums.length; j++) {
    // 不相等时 修改该项的值
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  // 下标从0开始 加1才是真实长度
  return i + 1;
};
