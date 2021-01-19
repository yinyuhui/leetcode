// /**
//  * initialize your data structure here.
//  */
// var MinStack = function () {
//     this.min = Infinity
//     this.list = []
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */

// // 如果先 push 之后被清空，这样 this.min 没有被重置，还是之前 push 时设置的最小值，导致 getMin 返回错误
// MinStack.prototype.push = function (x) {
//     if (x < this.min) {
//         this.min = x
//     }
//     this.list.push({
//         value: x,
//         min: this.min
//     })
//     console.log('push',this.list)
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     this.list.pop()
//     console.log('pop',this.list)
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     console.log('top',this.list)
//     return this.list[this.list.length - 1].value
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     console.log('getMin',this.list)
//     return this.list[this.list.length - 1].min
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.list = []
}

/**
 * @param {number} x
 * @return {void}
 */

MinStack.prototype.push = function (x) {
    const len = this.list.length
    const preMin = len === 0 ? x : this.list[len - 1].min

    this.list.push({
        value: x,
        min: x < preMin ? x : preMin,
    })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.list.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.list[this.list.length - 1].value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.list[this.list.length - 1].min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
