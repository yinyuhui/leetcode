/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 60ms 复杂度非常高
var generate = function(numRows) {
  let result = [];
  if (numRows === 0) return [];
  for (let i = 1; i <= numRows; i++) {
    if (i === 1) {
      result.push([1]);
    } else {
      let arr = [1];
      let list = result[i - 2];
      // result[i-2]各项相加 第0项取0 第length+1项取0
      for (let j = 0; j < list.length - 1; j++) {
        arr.push(list[j] + list[j + 1]);
      }
      arr.push(1);
      result.push(arr);
    }
  }
  return result;
};
