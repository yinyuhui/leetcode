/**
 * @param {number[]} digits
 * @return {number[]}
 */

// api解 超出精度时会出错
// var plusOne = function(digits) {
//     return String(parseInt(digits.join('')) + 1).split('')
// };

// 80ms 新建数组 对每一项都处理一遍
// var plusOne = function(digits) {
//     let len = digits.length
//     let arr = []
//     let carry = false
//     for(let i = len - 1; i >= 0; i--) {
//         if(i === len - 1) { // 末位 判断是否进位
//             let sum = digits[i] + 1
//             carry = sum > 9
//             arr.unshift(sum % 10)
//             console.log('末位', i, arr)
//         } else if(carry) { // 非末位项
//             // 如果进位
//             let sum = digits[i] + 1
//             carry = sum > 9
//             arr.unshift(sum % 10)
//         }  else {
//             // 如果不进位
//             arr.unshift(digits[i])
//             carry = false
//         }
//     }
//     // 第一位数字进位
//     if(carry) {
//         arr.unshift(1)
//     }
//     return arr
// }

// 68ms 不新建数组 直接在源数组上修改
var plusOne = function(digits) {
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    // 从后往前遍历 如果小于9 当前项加1后返回数组
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      // 如果进位了 就把当前项赋值为余数 进入下一轮循环
      digits[i] = (digits[i] + 1) % 10;
    }
  }
  // 跳出循环了 但是最高位进位了 手动补1
  digits.unshift(1);
  return digits;
};
