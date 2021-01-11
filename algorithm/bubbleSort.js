// Array.prototype.bubbleSort = function () {
//     for (let i = 0; i < this.length - 1; i++) {
//         for (let j = 0; j < this.length - 1 - i; j++) {
//             if (this[j] > this[j + 1]) {
//                 const temp = this[j]
//                 this[j] = this[j + 1]
//                 this[j + 1] = temp
//             }
//         }
//     }
// }

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] < this[j + 1]) {
                const temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
}
const arr = []
for (let i = 0; i < 10; i++) {
    arr.push((Math.random() * 10) | 0)
}
arr.bubbleSort()
