/**
 * @param {number} k
 * @param {number[]} nums
 */
// var KthLargest = function (k, nums) {
//     this.nums = nums
//     this.k = k
// };

/**
 * @param {number} val
 * @return {number}
 */
// KthLargest.prototype.add = function (val) {
//     this.nums.push(val)
//     this.nums.sort((a, b) => b - a)
//     return this.nums[this.k - 1]
// };

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// 想错了，不应该用最大堆，这样每次还要取出来前几个，然后再放回去，提交直接超时了
// 求第K大值，应该用最小堆，堆的size控制为K，这样堆顶就是要求的值了
// class MaxHeap {
//     constructor() {
//         this.list = []
//     }

//     _swap(i1, i2) {
//         const temp = this.list[i1]
//         this.list[i1] = this.list[i2]
//         this.list[i2] = temp
//     }

//     insert(value) {
//         this.list.push(value)
//         let currentIndex = this.list.length - 1
//         while (true) {
//             let parentIndex = (currentIndex - 1) >> 1
//             if (parentIndex < 0) break
//             if (this.list[parentIndex] > this.list[currentIndex]) break
//             this._swap(currentIndex, parentIndex)
//             currentIndex = parentIndex
//         }
//     }

//     pop() {
//         if (this.list.length <= 1) return this.list.pop()
//         const res = this.list[0]
//         this.list[0] = this.list.pop()
//         const total = this.list.length
//         let currentIndex = 0
//         while (true) {
//             let left = currentIndex * 2 + 1
//             let right = currentIndex * 2 + 2
//             if (left >= total && right >= total) break
//             let temp = left
//             if (right < total && this.list[right] > this.list[left]) temp = right
//             if (this.list[temp] < this.list[currentIndex]) break
//             this._swap(temp, currentIndex)
//             currentIndex = temp
//         }
//         return res
//     }
// }
// var KthLargest = function (k, nums) {
//     this.nums = nums
//     this.k = k
//     this.heap = new MaxHeap()
//     for (let i = 0; i < nums.length; i++) {
//         this.heap.insert(nums[i])
//     }
// };

// KthLargest.prototype.add = function (val) {
//     this.heap.insert(val)
//     const list = []
//     for (let i = 0; i < this.k; i++) {
//         list.unshift(this.heap.pop())
//     }
//     const res = this.heap.pop()
//     for (let i = 0; i < this.k; i++) {
//         this.heap.insert(list[i])
//     }
//     return list[0]
// };

class MinHeap {
    constructor(k) {
        this.list = []
        this.k = k
    }

    _swap(i1, i2) {
        const temp = this.list[i1]
        this.list[i1] = this.list[i2]
        this.list[i2] = temp
    }

    insert(value) {
        // 这段逻辑可以写在外部调用的地方，写在这里这个堆就不通用了
        // 如果堆的大小达到了K个
        // console.log(1, this.list.length, this.k, this.peek(), value)
        if (this.list.length === this.k) {
            // 往里放之前，判断下顶是不是比要放的值大，大就不用更新堆了
            if (this.peek() >= value) return
            // 不然就把堆顶删除，再插入新的值
            this.pop()
        }
        this.list.push(value)
        let currentIndex = this.list.length - 1
        while (true) {
            // 这也能写错！求父节点的索引
            let parentIndex = (currentIndex - 1) >> 1
            if (parentIndex < 0) break
            if (this.list[parentIndex] < this.list[currentIndex]) break
            this._swap(currentIndex, parentIndex)
            currentIndex = parentIndex
        }
        if (this.list.length === this.k) {
        }
    }

    pop() {
        if (this.list.length <= 1) return this.list.pop()
        this.list[0] = this.list.pop()
        let currentIndex = 0
        const total = this.list.length
        while (true) {
            let left = currentIndex * 2 + 1
            let right = currentIndex * 2 + 2
            if (left >= total && right >= total) break
            let temp = left
            // 这里写顺手了 找更小的子节点写成了右孩子和当前节点比较..
            if (right < total && this.list[right] < this.list[left])
                temp = right
            if (this.list[temp] > this.list[currentIndex]) break
            this._swap(temp, currentIndex)
            currentIndex = temp
        }
    }

    peek() {
        return this.list[0]
    }
}

var KthLargest = function (k, nums) {
    this.nums = nums
    this.heap = new MinHeap(k)
    for (let i = 0; i < nums.length; i++) {
        this.heap.insert(nums[i])
    }
}

KthLargest.prototype.add = function (val) {
    this.heap.insert(val)
    return this.heap.peek()
}
