/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

// 照旧第一个是看到题目后想到的解法
// var isToeplitzMatrix = function (matrix) {
//     // 从左上到右下的对角线元素相同，说明只需要遍历第一行和第一列的斜对角项
//     // 如果遇到不相同的就返回false
//     // 如果遇到某一项的对角线上的元素都遍历完了就去遍历下一项
//     let m = matrix.length, n = matrix[0].length
//     for (let i = 0; i < m; i++) {
//         for (let x = i + 1, y = 1; x < m && y < n; x++ , y++) {
//             if (matrix[i][0] !== matrix[x][y]) {
//                 return false
//             }
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let x = 1, y = i + 1; x < m && y < n; x++ , y++) {
//             if (matrix[0][i] !== matrix[x][y]) {
//                 return false
//             }
//         }
//     }
//     return true
// };

// 果然，自己想出来的题解比较弱，才击败了31%
// 官方题解只需要遍历一次，每一项跟左上角那项对比，如果不相等就返回false，击败41%..
// 进阶由于能力限制，先不考虑，以后再刷时可以试一下
var isToeplitzMatrix = function (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false
            }
        }
    }
    return true
}