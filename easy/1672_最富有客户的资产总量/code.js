/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0, m = accounts.length, n = accounts[0].length
    for(let i = 0; i < m; i++) {
        let sum = 0
        for(let j = 0; j < n; j++) {
            sum += accounts[i][j]
        }   
        if(max < sum) max = sum
    }
    return max
};