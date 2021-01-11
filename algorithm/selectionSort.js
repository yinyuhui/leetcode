// Array.prototype.selectionSort = function () {
//     for (let i = 0; i < this.length - 1; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < this.length; j++) {
//             if (this[j] < this[minIndex]) minIndex = j
//         }
//         if (minIndex !== i) {
//             const temp = this[minIndex]
//             this[minIndex] = this[i]
//             this[i] = temp
//         }
//     }
// }

Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length; i++) {
        let max = i
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] > this[max]) max = j
        }
        if (max !== i) {
            const temp = this[i]
            this[i] = this[max]
            this[max] = temp
        }
    }
}

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push((Math.random() * 10) | 0)
}
arr.selectionSort()
