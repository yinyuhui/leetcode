/**
 * @param {number} n
 * @return {number}
 */
// 先用递归写，能很清晰的看出动态规划思想，会超出时间限制
// var climbStairs = function (n) {
//     if (n < 2) return 1
//     else return (climbStairs(n - 1) + climbStairs(n - 2))
// };

// 空间复杂度不是很好，因为有无谓的数组在其中，将其优化
// var climbStairs = function (n) {
//     let list = [1, 1]
//     for (let i = 2; i <= n; i++) {
//         // 这里动态规划还是明显
//         list[i] = list[i - 1] + list[i - 2]
//     }
//     return list[n]
// }

var climbStairs = function (n) {
    let n1 = 1
    let n2 = 1
    for (let i = 2; i <= n; i++) {
        const temp = n1
        n1 = n2
        n2 = temp + n2
    }
    return n2
}
