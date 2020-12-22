Array.prototype.selectionSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[minIndex]) minIndex = j
        }
        if (minIndex !== i) {
            const temp = this[minIndex]
            this[minIndex] = this[i]
            this[i] = temp
        }
    }
}
const arr = [2, 3, 5, 4, 6, 1]
arr.selectionSort()
