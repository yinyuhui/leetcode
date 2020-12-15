/**
 * @param {number[]} arr
 * @return {boolean}
 */

// 先按照题意来一遍
// var validMountainArray = function (arr) {
//     if (arr.length < 3) return false
//     // top 山顶
//     let top = 0
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             if (top === i) {
//                 top = i + 1
//             } else {
//                 return false
//             }
//         } else if (arr[i] === arr[i + 1]) {
//             return false
//         }
//     }
//     return !(top === 0 || top === arr.length - 1)
// };

// 题解是从两边爬山，判断山顶是否相同，试一下
// var validMountainArray = function (arr) {
//     if (arr.length < 3) return false

//     let t1 = 0, t2 = arr.length - 1
//     // 左边峰顶
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < arr[i + 1]) {
//             t1 = i + 1
//         } else {
//             break
//         }
//     }

//     // 右边峰顶
//     for (let i = arr.length - 1; i > 0; i--) {
//         if (arr[i] < arr[i - 1]) {
//             t2 = i - 1
//         } else {
//             break
//         }
//     }

//     return t1 === t2 && t1 !== 0 && t2 !== arr.length - 1
// }

// 题解有优化，左侧峰顶获取之后，先判断是不是在左右边边上，这样可以不做找右边山峰的循环
var validMountainArray = function (arr) {
    if (arr.length < 3) return false

    let t1 = 0, t2 = arr.length - 1
    // 左边峰顶
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            t1 = i + 1
        } else {
            break
        }
    }
    if (t1 === 0 || t1 === arr.length - 1) return false

    // 右边峰顶，必须要左边峰顶是在数组中间才会执行
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) {
            t2 = i - 1
        } else {
            break
        }
    }

    // 所以此处返回只需要判断左右峰顶是否是同一个
    return t1 === t2
}
