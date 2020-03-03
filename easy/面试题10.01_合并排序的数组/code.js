/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  // 先去掉后面不要的 再把B追加进去 最后排序
  // splice 参数 从第a个去掉b项 在第a项后面追加c内容 可以解构
  A.splice(m, A.length - m, ...B);
  A.sort((a, b) => a - b);
};
