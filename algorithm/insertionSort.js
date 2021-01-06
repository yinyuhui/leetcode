// Array.prototype.insertionSort = function () {
//     for (let i = 1; i < this.length; i++) {
//         const temp = this[i]
//         for (let j = i; j >= 0; j--) {
//             if (this[j - 1] > temp && j > 0) {
//                 this[j] = this[j - 1]
//             } else {
//                 this[j] = temp
//                 break
//             }
//         }
//     }
// }

Array.prototype.insertionSort = function () {
    let temp
    let j
    for (let i = 1; i < this.length; i++) {
        temp = this[i]
        j = i - 1
        while (j >= 0 && this[j] < temp) {
            // 先计算左边下标，再执行右边表达式
            this[j + 1] = this[j--]
        }
        this[j + 1] = temp
    }
}

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push((Math.random() * 10) | 0)
}
arr.insertionSort()
