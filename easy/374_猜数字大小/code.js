/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1,
        right = n
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const res = guess(mid)
        if (res === 0) {
            return mid
        } else if (res === -1) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}
