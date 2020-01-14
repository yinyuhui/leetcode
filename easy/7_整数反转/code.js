/**
 * @param {number} x
 * @return {number}
 */

// var reverse = function(x) {
//     let arr = String(x).split('').reverse()
//     let sign = undefined

//     // 如果带符号
//     if(isNaN(Number(arr[arr.length - 1]))) {
//         sign = arr.pop()
//     }

//     sign && arr.unshift(sign)

//     let result = arr.join('')

//     if(result > (Math.pow(2, 31) - 1) || result < -Math.pow(2, 31)) result = 0

//     return result

// };

// 最优解 API
var reverse = function(x) {
    let sign = Math.sign(x)
    let result =
        String(Math.abs(x))
            .split('')
            .reverse()
            .join('') * sign
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) result = 0
    return result
}
