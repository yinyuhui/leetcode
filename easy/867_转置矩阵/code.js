/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const result = []
    A.forEach((row, i) => {
        row.forEach((num, j) => {
            result[j] ? (result[j][i] = num) : (result[j] = [num])
        })
    })
    return result
};