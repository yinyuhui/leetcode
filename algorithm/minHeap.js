// class MinHeap {
//     constructor() {
//         this.list = []
//     }

//     _swap(i1, i2) {
//         const temp = this.list[i1]
//         this.list[i1] = this.list[i2]
//         this.list[i2] = temp
//     }

//     _getParent(index) {
//         return (index - 1) >> 1
//     }

//     _getLeftAndRight(index) {
//         return {
//             left: index * 2 + 1,
//             right: index * 2 + 2,
//         }
//     }

//     _shiftUp(index) {
//         let parentIndex = this._getParent(index)
//         while (parentIndex >= 0 && this.list[index] < this.list[parentIndex]) {
//             this._swap(index, parentIndex)
//             index = parentIndex
//             parentIndex = this._getParent(index)
//         }
//     }

//     _shiftDown(index) {
//         const total = this.list.length
//         let { left, right } = this._getLeftAndRight(index)
//         let temp = left
//         while (
//             left <= total &&
//             right <= total &&
//             (this.list[index] > this.list[left] ||
//                 this.list[index] > this.list[right])
//         ) {
//             // 先找个更小的那个子节点
//             if (this.list[left] > this.list[right]) {
//                 temp = right
//             }
//             // 如果当前节点比子节点都大，交换
//             if (this.list[temp] < this.list[index]) {
//                 this._swap(index, temp)
//                 index = temp
//                 ;({ left, right } = this._getLeftAndRight(index))
//                 temp = left
//             }
//         }
//     }

//     insert(value) {
//         this.list.push(value)
//         let currentIndex = this.list.length - 1
//         this._shiftUp(currentIndex)
//     }

//     pop() {
//         if (this.list.length <= 1) return this.list.pop()
//         let res = this.list[0]
//         this.list[0] = this.list.pop()
//         this._shiftDown(0)
//         return res
//     }
// }

class MinHeap {
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
            if (this.list[parentIndex] < this.list[currentIndex]) break
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
            if (r <= total - 1 && this.list[r] < this.list[l]) temp = r
            if (this.list[temp] > this.list[currentIndex]) break
            this._swap(temp, currentIndex)
            currentIndex = temp
        }
        return res
    }
}

const heap = new MinHeap()
const count = 10

for (let i = 0; i < count; i++) {
    heap.insert(parseInt(Math.random() * 100))
}

for (let i = 0; i < count; i++) {
    console.log(heap.pop())
}
