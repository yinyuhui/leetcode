/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 暴力一圈一圈输出 
// var spiralOrder = function (matrix) {
//     if (!matrix.length) return []
//     if (!matrix[0].length) return []
//     // 二维矩阵的点数量
//     const count = matrix.length * matrix[0].length
//     let res = []
//     let i = 0, j = 0
//     let m = matrix.length, n = matrix[0].length
//     console.log('count', count)
//     while (res.length < count) {
//         // 向右
//         while (j >= 0 && j++ < n) {
//             res.push(matrix[i].shift())
//         }
//         if (res.length >= count) return res
//         matrix.shift()
//         m = matrix.length
//         j = n - 1

//         // 向下
//         while (i >= 0 && i <= m - 1) {
//             res.push(matrix[i++].pop())
//         }
//         if (res.length >= count) return res
//         n = matrix[0] && matrix[0].length || 0
//         i = m - 1
//         j = n - 1

//         // 向左
//         while (j-- >= 0) {
//             res.push(matrix[i].pop())
//         }
//         if (res.length >= count) return res
//         matrix.pop()
//         m = matrix.length
//         j = 0
//         i = m - 1

//         // 向上
//         while (i > 0) {
//             res.push(matrix[i--].shift())
//         }
//         if (res.length >= count) return res
//         n = matrix[0] && matrix[0].length || 0
//         i = 0
//         j - n - 1
//     }
//     return res
// };

// 直接赋值，不改变原数组，设置四个截止条件
// while 会将代码块执行结束才会判断是否跳出，每次内循环结束时需要判断是否跳出
var spiralOrder = function (matrix) {
    const m = matrix.length
    const n = m && matrix[0].length
    if (!m || !n) return []
    let left = 0, right = n - 1, top = 0, bottom = m - 1
    let res = []
    while (res.length < m * n) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        if (++top > bottom) break

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        if (--right < left) break

        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        if (--bottom < top) break

        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        if (++left > right) break
    }
    return res
}