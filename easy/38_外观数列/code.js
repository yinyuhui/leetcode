/**
 * @param {number} n
 * @return {string}
 */

// 76 ms  对字符串遍历一遍 获取每一组值及出现次数
var countAndSay = function(n) {
  if (n == 1) return "1";
  let result = countAndSay(n - 1);
  let j = 0;
  let str = "";
  // 注意结束条件 要对比到为空到那一项 而不是最后一项 否则最后一项不会被比较
  for (let i = j; i <= result.length; i++) {
    if (result[i] !== result[j]) {
      str = `${str}${i - j}${result[j]}`;
      j = i;
    }
  }
  return str;
};

// 还可以正则匹配 目前只会基础匹配 还需要熟悉一下
