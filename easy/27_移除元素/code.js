/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 64ms
var removeElement = function(nums, val) {
  let i = (j = 0);
  // 如果跟传入值相同就跳过 不同则赋值
  for (j; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};
