/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function(nums, target) {
//     for(let index = 0; index < nums.length; index++ ) {
//             for(let i = index + 1; i < nums.length; i++) {
//                 if(nums[index] + nums[i] === target) {
//                     console.log(index, i)
//                     return [index, i]
//                 }
//             }
//     }
// };

// 最优解
// var twoSum = function(nums, target) {
//     let obj = {}
//     for(let index = 0; index < nums.length; index++)  {
//         let key = nums[index];
//         if(obj[key]!== undefined) {
//             return ([index, obj[key]])
//         }
//         else {
//             obj[target-key] = index
//         }
//     }
// };

var twoSum = function(nums, target) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        let key = nums[index]
        if (map.get(key) !== undefined) {
            return [index, map.get(key)]
        } else {
            map.set(target - key, index)
        }
    }
}
