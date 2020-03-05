/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 160ms
// var strStr = function(haystack, needle) {
//     let len = needle.length

//     // 空串返回0
//     if(!len) return 0

//     // needle长度比源大 返回-1
//     if(len > haystack.length) return -1

//     // 从第一位开始 取needle长度的串比较 第一个匹配处返回索引
//     for(let i = 0; i <= haystack.length - len; i++) {
//         if(haystack.slice(i, i+len) === needle) {
//             return i
//         }
//     }

//     // 没有匹配项返回-1
//     return -1
// };

// 72ms slice 导致的耗时
var strStr = function(haystack, needle) {
  let len = needle.length;

  // 空串返回0
  if (!len) return 0;

  // needle长度比源大 返回-1
  if (len > haystack.length) return -1;

  // 从第一位开始 取needle长度的串比较 第一个匹配处返回索引
  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack[i] === needle[0]) {
      let flag = true;
      for (let j = 0; j < len; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false;
        }
      }
      if (flag) return i;
    }
  }

  // 没有匹配项返回-1
  return -1;
};
