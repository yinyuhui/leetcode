// 归并排序是不断获取有序子数组并合并，最终得到有序数组
// 快速排序是取一个中间值，获取比该值小、比该值大的两个数组，再对这两个数组重复上述过程

Array.prototype.quickSort = function () {
    const rec = (arr) => {
        // 小于等于1个时，只有中间值，没法继续分组，直接返回
        if (arr.length <= 1) return arr

        // 先设置一个值假设为中间值，初始化左右两侧子数组
        const mid = arr[0]
        const left = []
        const right = []

        // 比中间值大的放左边，比中间值小的放右边
        for (let i = 1; i < arr.length; i++) {
            arr[i] > mid ? left.push(arr[i]) : right.push(arr[i])
        }

        // 递归排序左右子数组
        return [...rec(left), mid, ...rec(right)]
    }

    const result = rec(this)
    result.forEach((v, i) => (this[i] = v))
}

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push((Math.random() * 20) | 0)
}
arr.quickSort()
