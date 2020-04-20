/**
 * @param {number[]} nums
 * @return {number}
 */

// 84 ms 两次循环 第一次记录次数 第二次取出现次数为1的数字
// var singleNumber = function(nums) {
//     let obj = {}
//     for(let num of nums) {
//         if(obj[num]) {
//             obj[num]++
//         } else {
//             obj[num] = 1
//         }
//     }
//     for(let key in obj) {
//         if(obj[key] === 1) {
//             return key
//         }
//     }
// };

// 68 ms 异或
var singleNumber = function (nums) {
	let result = 0
	for (let num of nums) {
		result = num ^ result
	}
	return result
}
