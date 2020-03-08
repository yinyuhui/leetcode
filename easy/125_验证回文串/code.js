/**
 * @param {string} s
 * @return {boolean}
 */

// 84ms
// var isPalindrome = function(s) {
//     // 大写全部替为小写 非数组字母替换为空格 得到一个纯粹的字符串
//     s = s.toLocaleLowerCase()
//     s = s.replace(/[^a-z0-9]/g, '')

//     // 头尾双指针 值不相等就返回false 否则向中间逼近继续比较
//     let start = 0, end = s.length - 1
//     while(start <= end) {
//         if(s[start] !== s[end]) {
//             return false
//         }
//         start++
//         end--
//     }

//     // 如果比较结束还是一样的 说明是回文 返回true
//     return true
// };

// 76ms api 转小写 去掉非数字非字母 逆序后与原字符串比较
var isPalindrome = function(s) {
  s = s.toLocaleLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  let oldStr = s;
  let reverseStr = s
    .split("")
    .reverse()
    .join("");
  return oldStr === reverseStr;
};
