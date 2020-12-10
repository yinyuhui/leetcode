/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let res = 0
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i])? map.get(nums[i]) + 1: 1)
    }
    map.forEach((v) => {
        res += v * (v - 1) / 2
    })
    return res
};