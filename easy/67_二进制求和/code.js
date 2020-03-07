/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 72ms 从末位开始遍历a和b 对应项和进位相加后与2取余 对应项不存在时取0
var addBinary = function(a, b) {
  let listA = a.split("");
  let listB = b.split("");

  // 长度差
  let sub = a.length - b.length;

  // 如果小于0 listA高位补0  否则listB高位补0 保持两者长度相同
  if (sub < 0) {
    listA = [...Array(-sub).fill(0), ...listA];
  } else {
    listB = [...Array(sub).fill(0), ...listB];
  }

  let carry = 0;
  for (let i = listA.length - 1; i >= 0; i--) {
    let sum = +listA[i] + +listB[i] + carry;
    if (sum > 1) {
      listA[i] = sum % 2;
      carry = 1;
    } else {
      listA[i] = sum;
      carry = 0;
    }
  }

  // 最高位进位
  if (carry) listA.unshift(1);
  return listA.join("");
};
