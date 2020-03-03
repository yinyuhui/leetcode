/**
 * @param {string} s
 * @return {number}
 */

// 176ms 遍历 判断当前值跟紧邻其后的值大小 小于则减去当前 否则加
// var romanToInt = function(s) {
//     const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     }
//     let result = 0
//     let arr = s.split('')
//     arr.map((item, index) => {
//         // 最后一个了 没有下一个了 直接加
//         if(index === s.length - 1) {
//             result = result + map[item]
//         }
//         else {
//             map[item] < map[arr[index + 1]] ? result -= map[item] : result += map[item]
//         }
//     })
//     return result
// };

// 最优 处理输入 两位变成一位 再遍历求和
// var romanToInt = function(s) {
//     // s = s.replace(/IV/g, 'O').replace(/IX/g, 'W').replace(/XL/g, 'H').replace(/XC/g, 'U').replace(/CD/g, 'E').replace(/CM/g, 'S')
//     // 不用三元前提下 144ms 正则匹配耗时10+ms
//     s = s.replace('IV', 'O').replace('IX', 'W').replace('XL', 'H').replace('XC', 'U').replace('CD', 'E').replace('CM', 'S')
//     const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//         O: 4,
//         W: 9,
//         H: 40,
//         U: 90,
//         E: 400,
//         S: 900
//     }
//     // 如果是取不到 说明是初始值或以求和
//     return s.split('').reduce((a,b)=> {
//         // 168ms
//         if(map[a]) a = map[a]
//         if(map[b]) b = map[b]
//         return a + b

//         // 212ms 三元表达式会将运行速度拖慢
//         // return (map[a] ? map[a] : a) + (map[b] ? map[b]: b)
//     }, 0)
// }

// 全部加一遍 如果两位的存在 把多加的减掉
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: -2,
    IX: -2,
    XL: -20,
    XC: -20,
    CD: -200,
    CM: -200
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // 172ms 短路运算也会耗时
    // let sub = map[`${s[i]}${s[i+1]}`] || 0

    // 164ms
    let sub = map[`${s[i]}${s[i + 1]}`];
    if (!sub) sub = 0;

    result = result + map[s[i]] + sub;
  }
  return result;
};
