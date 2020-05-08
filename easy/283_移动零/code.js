/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 72ms
// var moveZeroes = function(nums) {
//     let len = nums.length
//     let sum = 0
//     for(let i = 0; i < len - sum; i++) {
//         if(nums[i] === 0) {
//             nums[nums.length] = 0
//             nums.splice(i, 1)
//             i--
//             sum++
//         }
//     }
// };

// 68ms
var moveZeroes = function (nums) {
	// 记录0和当前遍历的index，最初两者相等
	let zeroIndex = (currentIndex = 0)
	while (currentIndex < nums.length) {
		if (nums[currentIndex] !== 0) {
			// 如果不等 说明zeroIndex处是0，否则可能是非0值
			if (zeroIndex < currentIndex) {
				nums[zeroIndex] = nums[currentIndex]
				nums[currentIndex] = 0
			}
			// 如果两者不等，因为重新赋值为currentIndex处的值了，要向后挪一位
			// 如果相等，说明zeroIndex处是非0值，向后挪，否则下一轮循环会将这个非0值弄丢
			zeroIndex++
		}
		// 每次循环 计数都要自增
		currentIndex++
	}
}
