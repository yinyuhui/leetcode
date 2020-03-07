/**
 * @param {number} x
 * @return {number}
 */

// 80ms
var mySqrt = function(x) {
  let right = x;
  let left = (mid = preMid = 0);
  // 此处注意结束条件 left > right 时才真正搜索完
  while (left <= right) {
    mid = ~~((left + right) / 2); // 向下取整
    if (mid * mid <= x) {
      left = mid + 1;
      preMid = mid;
    } else {
      right = mid - 1;
    }
  }
  return preMid;
};
