/**
 * @param {number[]} nums
 * @return {number}
 */
// 68ms
var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let nowSum = 0;
  for (let i = 0; i < nums.length; i++) {
    nowSum = nowSum + nums[i];
    if (nowSum > maxSum) {
      maxSum = nowSum;
    }
    if (nowSum < 0) {
      nowSum = 0;
    }
  }
  return maxSum;
};
