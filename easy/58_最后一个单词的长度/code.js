/**
 * @param {string} s
 * @return {number}
 */

// 64ms api解
// var lengthOfLastWord = function(s) {
//     if(!s) return 0
//     let list = s.trim().split(' ')
//     return list[list.length - 1].length
// };

// 居然还是64ms api 也是O(n)?
// 从后向前遍历 遇到的第一个字母开始计数 直到遇到空格 返回计数值
var lengthOfLastWord = function(s) {
  let count = 0;
  let flag = false; // 是否遇到了第一个字母
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      flag = true;
      count++;
    }
    // 已经遇到了字母 且遍历时又遇到空格 计数结束
    if (s[i] === " " && flag) {
      return count;
    }
  }
  return count;
};
