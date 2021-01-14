Array.prototype.mergeSort = function () {
    const sort = (arr) => {
        // 如果只有一个或0个，分不了两半了，就不用继续比了
        if (arr.length <= 1) {
            return arr
        }

        // 数组分成左右两半，分别排序
        const mid = arr.length >> 1

        // 由递归结束的条件可知，每次得到的子数组都是有序排列好的
        const left = sort(arr.slice(0, mid))
        const right = sort(arr.slice(mid))

        // 把两个排好序的数组合并成一个就得到结果，向上递归
        let result = []
        while (left.length && right.length) {
            result.push(left[0] > right[0] ? left.shift() : right.shift())
        }

        // 因为基本是左右均分的，不会存在两边差很多的情况，最多也就多一个而已，写 while 里也行
        if (left.length) result = result.concat(left)
        if (right.length) result = result.concat(right)

        // 把结果返给上一层
        return result
    }

    // 因为得到的是一个新的数据，要把结果灌到原数组中
    const res = sort(this)
    res.forEach((v, i) => (this[i] = v))
}

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push((Math.random() * 20) | 0)
}
arr.mergeSort()
