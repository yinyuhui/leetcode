/**
 * @param {number} x
 * @return {boolean}
 */

// 负数直接return 非负数整个取反 232ms
// var isPalindrome = function(x) {
//     let number = x

//     // 负数
//     if(x < 0) return false
//     let newNumber = 0
//     while(number) {
//         newNumber = number % 10 + newNumber * 10
           // 取整
//         number = ~~(number / 10)
//     }
//     return newNumber === x
// };

// 大于10的整个取反 228ms
// var isPalindrome = function(x) {
//     let number = x

//     // 负数
//     if(x < 0) return false

//     // 个位数
//     if(x < 10) return true

//     let newNumber = 0
//     while(number) {
//         newNumber = number % 10 + newNumber * 10
//         number = ~~(number / 10)
//     }
//     return newNumber === x
// };

// 一半取反 264ms
// var isPalindrome = function(x) {
//     let revertNum = 0

//     // 负数和尾数为0的数字 0除外
//     if(x < 0 || (x % 10 === 0 && x !== 0)) return false
    
//     // [0, 10]
//     if(x < 10 ) return true

//     // 尾数一定不是0
//     // 奇数位数字反转一半 + 1位数字时，反转数字一定大于未反转的　
//     // 偶数位数字反转一半数字时，反转数字可能大于 等于 小于未反转，只有等于时才是回文
//     while(revertNum < x) {
//         revertNum = revertNum * 10 + x % 10
//         x = ~~(x / 10)
//     }
//     return x === revertNum || x === ~~(revertNum / 10)
// }

// 一半取反 a||b 耗费时间 换了个写法 212ms
var isPalindrome = function(x) {
    let revertNum = 0

    // 负数和尾数为0的数字 0除外
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false
    
    // [0, 10]
    if(x < 10 ) return true

    // 尾数一定不是0
    // 奇数位数字反转一半 + 1位数字时，反转数字一定大于未反转的　
    // 偶数位数字反转一半数字时，反转数字可能大于 等于 小于未反转，只有等于时才是回文
    while(revertNum < x) {
        revertNum = revertNum * 10 + x % 10
        x = ~~(x / 10)
    }
    if(revertNum > x) revertNum = ~~(revertNum / 10)
    return x === revertNum 
}