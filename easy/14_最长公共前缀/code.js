/**
 * @param {string[]} strs
 * @return {string}
 */

// 64ms 取第一项 遍历字符串
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  for (let i = strs[0].length; i >= 0; i--) {
    // 如果字符串数组里每个都匹配 就返回结果 否则尾部去掉一位重新比较
    let prefix = strs[0].slice(0, i);
    let flag = strs.every(item => item.startsWith(prefix));
    if (flag) return prefix;
  }
  return "";
};
