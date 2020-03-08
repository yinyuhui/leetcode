/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 68ms API法 全都在 nums1 上操作
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m)
//     nums1.push(...nums2)
//     nums1.sort((a, b) => a-b)
// };

// 60ms 从后向前遍历
var merge = function(nums1, m, nums2, n) {
  let end = nums1.length - 1;
  let i = m - 1;
  let j = n - 1;
  // 取较大值插入 并把待插入下标向前挪一位
  while (j >= 0 && i >= 0) {
    if (nums2[j] >= nums1[i]) {
      nums1[end--] = nums2[j--];
    } else {
      nums1[end--] = nums1[i--];
    }
  }
  // 遍历结束 2还有多的没插进去
  if (j >= 0) {
    for (let index = 0; index <= j; index++) {
      nums1[index] = nums2[index];
    }
  }
};
