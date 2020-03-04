/**
 * @param {string} s
 * @return {boolean}
 */

// 60ms
// var isValid = function(s) {
//     let arr = []
//     const map = {
//         '(': 'a',
//         '[': 'b',
//         '{': 'c',
//         ')': '-a',
//         ']': '-b',
//         '}': '-c'
//     }
//     for(item of s) {
//         const str = map[item]
//         // 如果是左括号 从头部压入栈
//         if(!str.includes('-')) {
//             arr.unshift(str)
//         }
//         // 如果是右括号 判断栈中是否有值
//         // 有的话判断第一个的值与当前的是否互补 互补则头部弹出 不互补返回false
//         // 如果栈为空 说明没有没有可匹配的左括号了 返回 false
//         else {
//             if(!arr) return false
//             if(arr[0] === str.replace('-', '')) {
//                 arr.shift()
//             } else {
//                 return false
//             }
//         }
//     }
//     // 若遍历结束栈中还有值 说明有还左括号没配对
//     return !arr.length
// };

// 64ms 一样的思路，只是 map 不一样
var isValid = function(s) {
  let arr = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  for (item of s) {
    // 右括号
    if (map[item]) {
      if (!arr) return false;
      if (map[item] !== arr[0]) return false;
      arr.shift();
    }
    // 左括号
    else {
      arr.unshift(item);
    }
  }
  return !arr.length;
};
