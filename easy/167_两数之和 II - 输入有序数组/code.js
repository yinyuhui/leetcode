/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 324ms 暴力求解法，两重循环获取和，判断与目标值是否相等，相等时返回结果
// var twoSum = function(numbers, target) {
//     let len = numbers.length
//     for(let index1 = 0; index1 < len - 1; index1++) {
//         for(let index2 = index1 + 1; index2 < len; index2++) {
//             if((numbers[index1] + numbers[index2]) === target) {
//                 return [index1 + 1, index2 + 1]
//             }
//         }
//     }
// };

// 68ms 双指针
var twoSum = function (numbers, target) {
	let index1 = 0,
		index2 = numbers.length - 1
	while (index1 < index2) {
		const sum = numbers[index1] + numbers[index2]
		if (sum < target) {
			index1++
		} else if (sum > target) {
			index2--
		} else {
			return [index1 + 1, index2 + 1]
		}
	}
	return [-1, -1]
}
