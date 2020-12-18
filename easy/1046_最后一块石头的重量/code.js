/**
 * @param {number[]} stones
 * @return {number}
 */
class MaxHeap {
    constructor() {
        this.list = []
    }

    _swap(i1, i2) {
        const temp = this.list[i1]
        this.list[i1] = this.list[i2]
        this.list[i2] = temp
    }

    insert(value) {
        this.list.push(value)
        let currentIndex = this.list.length - 1
        while (true) {
            let parentIndex = (currentIndex - 1) >> 1
            if (parentIndex < 0) break
            if (this.list[parentIndex] > this.list[currentIndex]) break
            this._swap(currentIndex, parentIndex)
            currentIndex = parentIndex
        }
    }

    pop() {
        if (this.list.length <= 1) return this.list.pop()
        const res = this.list[0]
        this.list[0] = this.list.pop()
        const total = this.list.length
        let currentIndex = 0
        while (true) {
            let l = currentIndex * 2 + 1
            let r = currentIndex * 2 + 2
            if (l >= total && r >= total) break
            let temp = l
            if (r < total && this.list[r] > this.list[l]) temp = r
            if (this.list[temp] < this.list[currentIndex]) break
            this._swap(temp, currentIndex)
            currentIndex = temp
        }
        return res
    }
}
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap()
    for (let i = 0; i < stones.length; i++) {
        heap.insert(stones[i])
    }
    while (heap.list.length > 1) {
        let s1 = heap.pop()
        let s2 = heap.pop()
        let res = s1 - s2
        if (res) heap.insert(res)
    }
    if (heap.list.length) return heap.pop()
    return 0
}
