/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        if((arr[i] % 2) && (arr[i + 1] % 2) && (arr[i + 2] % 2)) {
            return true
        }
    }
    return false
};