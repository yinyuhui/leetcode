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
        let parentIndex = (currentIndex - 1) >> 1
        while (parentIndex >= 0) {
            if (this.list[currentIndex] > this.list[parentIndex]) {
                this._swap(currentIndex, parentIndex)
                currentIndex = parentIndex
                parentIndex = (currentIndex - 1) >> 1
            } else {
                break
            }
        }
    }

    pop() {
        if (this.size() <= 1) return this.list.pop()
        // 把堆顶保留，用于最后返回
        const res = this.list[0]
        // 把最后一项赋给堆顶，下沉，用的 pop 可以将堆减1
        this.list[0] = this.list.pop()
        const total = this.list.length
        let currentIndex = 0
        while (true) {
            let left = currentIndex * 2 + 1
            let right = currentIndex * 2 + 2
            // 两个都比 total 大，说明已经沉到最下面了
            // 等于 total 的时候就已经越界了！！！！
            if (right >= total && left >= total) break
            // 能执行到这里 说明 left 或 right 至少有一个有值，先假设是要跟 left 换
            let temp = left
            // 但是如果右边有值且右边的值更大，那就跟右边的换
            if (right <= total && this.list[right] > this.list[left]) {
                temp = right
            }
            // 但是如果要换的那个值比当前值要小，说明已经到合适的位置了，不用再换了
            if (this.list[temp] < this.list[currentIndex]) break
            this._swap(temp, currentIndex)
            currentIndex = temp
        }
        return res
    }

    size() {
        return this.list.length
    }
}

const heap = new MaxHeap()
const count = 10

for (let i = 0; i < count; i++) {
    heap.insert(parseInt(Math.random() * 100))
}

for (let i = 0; i < count; i++) {
    console.log(heap.pop())
}
